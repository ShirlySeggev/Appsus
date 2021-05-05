import { NoteSearch } from './cmps/NoteSearch.jsx';
import { NotesAdd } from './cmps/NotesAdd.jsx';
import { NotesList } from './cmps/NotesList.jsx';
import { NoteUpdate } from './cmps/NoteUpdate.jsx';

import { keepService } from './services/keep-service.js';


export class KeepApp extends React.Component {
    state = {
        notes: null,
        titleToSearch: null,
        isOnUpdate: false,
        noteToUpdate: null
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        keepService.query(this.state.titleToSearch)
            .then((notes) => {
                this.setState({ notes })
            });
    }

    onSetFilter = (titleToSearch) => {
        this.setState({ titleToSearch }, this.loadNotes);
    }

    onDeleteNote = (noteId) => {
        keepService.deleteNote(noteId)
            .then((notes) => {
                this.setState({ notes })
            })
        this.onCloseModal();
    }

    onUpdateNote = (noteId) => {
        keepService.updateNote(noteId)
            .then(note => {
                this.setState({ isOnUpdate: !this.state.isOnUpdate, noteToUpdate: note })
            })
    }

    onCloseModal = () => {
        this.setState({ isOnUpdate: false, noteToUpdate: null })
    }



    render() {
        const { notes, isOnUpdate } = this.state;
        if (!notes) return <div>Loading...</div>
        return (
            <section className="keepApp-container">

                <header className="keepApp-header">
                    <NotesAdd loadNotes={this.loadNotes} />
                    <NoteSearch onSetFilter={this.onSetFilter} />
                </header>

                <main className="keepApp-notes-container">
                    <h1>Pinned notes:</h1>
                    <h1>Notes to display:</h1>
                    <NotesList notes={notes} onDeleteNote={this.onDeleteNote} onUpdateNote={this.onUpdateNote} />
                </main>

                {isOnUpdate && <React.Fragment>
                    <div className="keepApp-modal-container"></div>
                    <div className="keepApp-update-modal">
                        <NoteUpdate note={this.state.noteToUpdate} onCloseModal={this.onCloseModal} onDeleteNote={this.onDeleteNote} />
                    </div>
                </React.Fragment>
                }

            </section>

        )
    }
}