import { utilService } from '../../../services/util-service.js';
import { keepService } from '../services/keep-service.js';

export class NotesAdd extends React.Component {
    state = {
        id: utilService.makeId(),
        type: 'NoteImg',
        title: '',
        txt: ''
    }

    componentDidMount() {
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value;
        this.setState({ ...this.state, [name]: value }, () => {
            console.log(this.state)
        })
    }

    onAddNote = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        keepService.addNote(this.state)
            .then((notes) => {
                console.log(notes);
                this.props.loadNotes()
            })
    }


    render() {
        const { title, txt } = this.state

        return (
            <div className="notesAdd-container">
                <form className="notesAdd-form" onSubmit={this.onAddNote}>
                    <input className="notesAdd-input" type="text" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Note's title" required />
                    <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="What's in your mind..." />
                    <button type="submit">+</button>
                </form>

            </div>
        )
    }
}