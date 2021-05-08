import { storageService } from '../../../services/storage-service.js';
import { utilService } from '../../../services/util-service.js';

export const keepService = {
    query,
    addNote,
    deleteNote,
    updateNote,
    getNoteText,
    editNote,
    changeBackground,
    changeColor,
    pinNote,
    markTodo,
    getNoteToMail
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
                    title: 'Don\'t forget!!!',
                    txt: 'Fullstack Me Baby!'
                },
                style: {
                    backgroundColor: '#eca1a6',
                    color: '#034f84',
                },
            },
            {
                id: 'bbb',
                type: 'NoteImg',
                isPinned: false,
                info: {
                    title: 'Passport photo',
                    url: `https://robohash.org/aa`
                },
                style: {
                    backgroundColor: '#b1cbbb',
                    color: '#bc5a45',
                }
            },
            {
                id: 'ccc',
                type: 'NoteTodos',
                isPinned: true,
                info: {
                    title: 'Shopping list:',
                    todos: [
                        { id: '111', txt: 'Milk', isMarked: false, doneAt: Date.now() },
                        { id: '222', txt: 'Tomatoes', isMarked: true, doneAt: Date.now() },
                        { id: '333', txt: 'Cereals', isMarked: true, doneAt: Date.now() }
                    ]
                },
                style: {
                    backgroundColor: '#92a8d1',
                    color: 'black',
                }
            },
            {
                id: 'ddd',
                type: 'NoteVideo',
                isPinned: false,
                info: {
                    title: 'Relax video',
                    url: `https://www.youtube.com/embed/5qap5aO4i9A`
                },
                style: {
                    backgroundColor: '#f7786b',
                    color: '#ffef96'
                }
            },
            {
                id: 'eee',
                type: 'NoteAudio',
                isPinned: false,
                info: {
                    title: 'My favorite song',
                    url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
                },
                style: {
                    backgroundColor: '#ADD8E6',
                    color: '#800000'
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
            backgroundColor: '#fefbd8',
            color: '#618685',
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
            newNote.info.todos = todos.map(todo => {
                let todoObj = {
                    id: utilService.makeId(),
                    txt: todo,
                    isMarked: false,
                    doneAt: Date.now()
                }
                return todoObj;
            });
            break;
        case 'NoteVideo':
            const embedUrl = getEmbedUrl(noteToAdd.txt);
            newNote.info.url = embedUrl;
            break;
        case 'NoteAudio':
            newNote.info.url = noteToAdd.txt;
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
        case 'NoteAudio':
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
                    id: utilService.makeId(),
                    txt: todo,
                    isMarked: false,
                    updateAt: Date.now()
                }
                return todoObj;
            });
            break;
        case 'NoteVideo':
            const embedUrl = getEmbedUrl(noteUpdated.txt);
            note.info.url = embedUrl;
            break;
        case 'NoteAudio':
            note.info.url = noteUpdated.txt;
            break;
        default:
            console.log('note type not found');
    }

    _saveNotesToStorage();
    return Promise.resolve();
}

function changeBackground(noteId, bcgColor) {
    const note = gNotes.find(note => note.id === noteId);
    note.style.backgroundColor = bcgColor;
    _saveNotesToStorage();
    return Promise.resolve(gNotes);
}

function changeColor(noteId, color) {
    const note = gNotes.find(note => note.id === noteId);
    note.style.color = color;
    _saveNotesToStorage();
    return Promise.resolve(gNotes);
}

function pinNote(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    note.isPinned = !note.isPinned;
    _saveNotesToStorage();
    return Promise.resolve(gNotes);
}

function markTodo(noteId, todoId) {
    const note = gNotes.find(note => note.id === noteId);
    const todo = note.info.todos.find(todo => todo.id === todoId);
    todo.isMarked = !todo.isMarked;
    _saveNotesToStorage();
}

function getNoteToMail(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    const noteToMail = {
        id: noteId,
        type: note.type,
        title: note.info.title,
        txt: getNoteText(noteId)
    }
    return Promise.resolve(noteToMail);
}