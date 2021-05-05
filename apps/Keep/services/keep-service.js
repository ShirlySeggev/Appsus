import { storageService } from '../../../services/storage-service.js';

export const keepService = {
    query,
    addNote,
    deleteNote,
    updateNote,
    getNoteText,
    editNote

}

const KEY = 'notes';
var gNotes;

_createNotes();

function _createNotes() {
    var notes = storageService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        notes = [{
                id: 'aaa',
                type: 'NoteText',
                isPinned: true,
                info: {
                    title: 'Note 1',
                    txt: 'Fullstack Me Baby!'
                },
                style: {
                    backgroundColor: '#00d',
                    color: 'black',
                },
            },
            {
                id: 'bbb',
                type: 'NoteImg',
                isPinned: false,
                info: {
                    title: 'Me playing Mi',
                    url: `https://robohash.org/aa`
                },
                style: {
                    backgroundColor: '#00d'
                }
            },
            {
                id: 'ccc',
                type: 'NoteTodos',
                isPinned: false,
                info: {
                    title: 'How was it:',
                    todos: [
                        { txt: 'Do that', doneAt: null },
                        { txt: 'Do this', doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: '#00d'
                }
            },
            {
                id: 'ddd',
                type: 'NoteVideo',
                isPinned: false,
                info: {
                    title: 'relax video',
                    url: `https://www.youtube.com/embed/5qap5aO4i9A`
                },
                style: {
                    backgroundColor: '#00d'
                }
            }
        ];
    }
    gNotes = notes;
    _saveNotesToStorage();
}

function query(titleToSearch) {
    if (titleToSearch) {
        const filteredNotes = gNotes.filter(note => {
            return ((note.info.title).toLowerCase()).includes(titleToSearch.toLowerCase());
        })
        return Promise.resolve(filteredNotes);
    }
    return Promise.resolve(gNotes);
}

function addNote(noteToAdd) {
    const type = noteToAdd.type;

    let newNote = {
        id: noteToAdd.id,
        type: noteToAdd.type,
        isPinned: false,
        info: {
            title: noteToAdd.title,
        },
        style: {
            backgroundColor: '#00d',
            color: 'black',
        }
    }
    switch (type) {
        case 'NoteText':
            newNote.info.txt = noteToAdd.txt;
            break;
        case 'NoteImg':
            newNote.info.url = noteToAdd.txt;
            break;
        case 'NoteTodos':
            let todos = (noteToAdd.txt).split(',');
            console.log(todos);
            newNote.info.todos = todos.map(todo => {
                let todoObj = {
                    txt: todo,
                    doneAt: Date.now()
                }
                return todoObj;
            });
            break;
        case 'NoteVideo':
            const embedUrl = getEmbedUrl(noteToAdd.txt);
            newNote.info.url = embedUrl;
            break;
        default:
            console.log('note type not found');
    }

    gNotes.push(newNote);
    _saveNotesToStorage();
    return Promise.resolve(gNotes);
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
}

function getEmbedUrl(urlToConvert) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = urlToConvert.match(regExp);

    const partialUrl = (match && match[2].length === 11) ? match[2] : null;
    return `//www.youtube.com/embed/${partialUrl}`;
}

function deleteNote(noteId) {
    const noteIdx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(noteIdx, 1);
    _saveNotesToStorage();
    return Promise.resolve(gNotes);
}


function updateNote(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function getNoteText(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    switch (note.type) {
        case 'NoteText':
            return note.info.txt;
        case 'NoteImg':
            return note.info.url;
        case 'NoteTodos':
            let todos = note.info.todos.map(todo => {
                return todo.txt
            })
            return todos.toString();
        case 'NoteVideo':
            return note.info.url;
        default:
            return 'note type not found';
    }

}

function editNote(noteId, noteUpdated) {
    const note = gNotes.find(note => note.id === noteId);
    note.info.title = noteUpdated.title;
    switch (note.type) {
        case 'NoteText':
            note.info.txt = noteUpdated.txt;
            break;
        case 'NoteImg':
            note.info.url = noteUpdated.txt;
            break;
        case 'NoteTodos':
            let todos = (noteUpdated.txt).split(',');
            note.info.todos = todos.map(todo => {
                let todoObj = {
                    txt: todo,
                    updateAt: Date.now()
                }
                return todoObj;
            });
            break;
        case 'NoteVideo':
            const embedUrl = getEmbedUrl(noteUpdated.txt);
            note.info.url = embedUrl;
            break;
        default:
            console.log('note type not found');
    }

    _saveNotesToStorage();
}