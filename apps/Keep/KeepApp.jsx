import { NoteSearch } from './cmps/NoteSearch.jsx';
import { NotesAdd } from './cmps/NotesAdd.jsx';
import { NotesList } from './cmps/NotesList.jsx';
import { NoteUpdate } from './cmps/NoteUpdate.jsx';
import { eventBusService } from '../../../services/event-bus-service.js';
import { keepService } from './services/keep-service.js';


export class KeepApp extends React.Component {
    state = {
        notes: null,
        titleToSearch: null,
        isOnUpdate: false,
        noteToUpdate: null,
        noteToMail: null
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
                eventBusService.emit('show-user-msg', { userMsg: <p> The note was successfully deleted! </p>, type: 'success' })
            })
            .catch(eventBusService.emit('show-user-msg', { userMsg: <p>Something went wrong..try again</p>, type: 'error' }))
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

    onChangeBackground = (noteId, bcgColor) => {
        keepService.changeBackground(noteId, bcgColor)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onChangeColor = (noteId, color) => {
        keepService.changeColor(noteId, color)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onPin = (noteId) => {
        keepService.pinNote(noteId)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onSendToMail = (noteId) => {
        keepService.getNoteToMail(noteId)
            .then((note) => {
                this.setState({ noteToMail: note }, () => {
                    const string = `/index.html/mail#/title=${this.state.noteToMail.title}&txt=${this.state.noteToMail.txt}`;
                    console.log(string);
                    // window.location.href = string;
                })
            })
    }

    render() {
        const { notes, isOnUpdate } = this.state;
        if (!notes) return <img src="../../../assets/img/loading.gif" />
        return (
            <section className="keepApp-container">

                <header className="keepApp-header">
                    <NotesAdd loadNotes={this.loadNotes} />
                    <NoteSearch onSetFilter={this.onSetFilter} />
                </header>

                <main className="keepApp-notes-container">
                    <NotesList notes={notes} onDeleteNote={this.onDeleteNote} onUpdateNote={this.onUpdateNote} onChangeBackground={this.onChangeBackground} onChangeColor={this.onChangeColor} onPin={this.onPin} onSendToMail={this.onSendToMail} />
                </main>

                {isOnUpdate && <React.Fragment>
                    <div className="keepApp-modal-container"></div>
                    <div className="keepApp-update-modal" style={{ backgroundColor: `${this.state.noteToUpdate.style.backgroundColor}` }}>
                        <NoteUpdate note={this.state.noteToUpdate} onCloseModal={this.onCloseModal} onDeleteNote={this.onDeleteNote} />
                    </div>
                </React.Fragment>
                }

            </section>

        )
    }
}