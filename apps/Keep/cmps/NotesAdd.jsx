import { utilService } from '../../../services/util-service.js';
import { keepService } from '../services/keep-service.js';

export class NotesAdd extends React.Component {
    state = {
        id: utilService.makeId(),
        type: 'NoteText',
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
        this.clearNote();
    }

    onSelectTypeNote = (ev) => {
        const type = ev.target.name;
        this.setState({ type }, () => {
            console.log(this.state)
        })
    }

    clearNote = () => {
        this.setState({ id: utilService.makeId(), type: 'NoteText', title: '', txt: '' });
    }


    render() {
        const { title, txt, type } = this.state

        return (
            <div className="notesAdd-container">
                <form className="notesAdd-form" onSubmit={this.onAddNote}>
                    {/* {type && */}
                    <input className="notesAdd-input" type="text" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Note's title" required />
                    {/* } */}

                    {type === 'NoteText' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="What's in your mind..." />
                    }
                    {type === 'NoteImg' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter image URL..." />
                    }
                    {type === 'NoteTodos' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter comma separated list..." />
                    }
                    { type==='NoteVideo' &&
                    <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter video URL..." />
                    }

                    <div className="notesAdd-controler">
                        <button name="NoteText" onClick={this.onSelectTypeNote}>NoteText</button>
                        <button name="NoteImg" onClick={this.onSelectTypeNote}>NoteImg</button>
                        <button name="NoteTodos" onClick={this.onSelectTypeNote}>NoteTodos</button>
                        <button name="NoteVideo" onClick={this.onSelectTypeNote}>NoteVideo</button>
                    </div>
                    <button type="submit">+</button>
                </form>

            </div>
        )
    }
}