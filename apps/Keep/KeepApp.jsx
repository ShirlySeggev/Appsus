import { NoteSearch } from './cmps/NoteSearch.jsx';
import { NotesAdd } from './cmps/NotesAdd.jsx';
import { NotesList } from './cmps/NotesList.jsx';
import { NotePreview } from './cmps/NotePreview.jsx';

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
        console.log('delete');
        keepService.deleteNote(noteId)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onUpdateNote = (noteId) => {
        keepService.updateNote(noteId)
            .then(note => {
                this.setState({ isOnUpdate: !this.state.isOnUpdate, noteToUpdate: note })
            })
    }

    onCloseModal = () => {
        this.setState({ isOnUpdate: !this.state.isOnUpdate, noteToUpdate: null })
    }



    render() {
        const { notes, isOnUpdate } = this.state;
        if (!notes) return <div>Loading...</div>
        if (this.state.noteToUpdate){
            const { title } = this.state.noteToUpdate.info;
            console.log(title);
        } 
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
                        {/* <h1>{title}</h1> */}
                        {/* <h1>{this.state.noteToUpdate.info.title}</h1> */}
                        <NotePreview note={this.state.noteToUpdate} onDeleteNote={this.onDeleteNote} onUpdateNote={this.onUpdateNote} />
                        <button onClick={this.onCloseModal}>Close</button>
                        {/* <button onClick={()=>{onDeleteNote(this.state.noteToUpdate.id)}}>Delete</button> */}
                        {/* <button onClick={this.onSave}>Save</button> */}
                    </div>
                </React.Fragment>
                }

            </section>

        )
    }
}