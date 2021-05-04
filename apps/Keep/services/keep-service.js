import { storageService } from '../../../services/storage-service.js';

export const keepService = {
    query,
    addNote,

}

const KEY = 'notes';
var gNotes = [{
        id: 1,
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
        id: 2,
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
        id: 3,
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
    }
];


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
        default:
    }

    gNotes.push(newNote);
    return Promise.resolve(gNotes);
}