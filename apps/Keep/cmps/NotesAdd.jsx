import { utilService } from '../../../services/util-service.js';
import { eventBusService } from '../../../services/event-bus-service.js';
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
        keepService.addNote(this.state)
            .then((notes) => {
                this.props.loadNotes()
                eventBusService.emit('show-user-msg', { userMsg: <p> The note was successfully added! </p>, type: 'success' })
            })
            .catch(eventBusService.emit('show-user-msg', { userMsg: <p>Something went wrong..try again</p>, type: 'error' }))
        this.clearNote();
    }

    onSelectTypeNote = (ev) => {
        console.log(ev.currentTarget.name);
        const type = ev.currentTarget.name;
        // const type = ev.target.name;
        this.setState({ type })
    }

    clearNote = () => {
        this.setState({ id: utilService.makeId(), type: 'NoteText', title: '', txt: '' });
    }

    render() {
        const { title, txt, type } = this.state

        return (
            <div className="notesAdd-container">
                <form className="notesAdd-form" onSubmit={this.onAddNote}>

                    <div className="notesAdd-controler">
                        <button className="btn" name="NoteText" onClick={this.onSelectTypeNote}><i className="fa fa-font fa-keep"></i></button>
                        <button className="btn" name="NoteTodos" onClick={this.onSelectTypeNote}><i className="fa fa-list fa-keep"></i></button>
                        <button className="btn" name="NoteImg" onClick={this.onSelectTypeNote}><i className="fa fa-picture-o fa-keep"></i></button>
                        <button className="btn" name="NoteVideo" onClick={this.onSelectTypeNote}><i className="fa fa-youtube-play fa-keep"></i></button>
                        <button className="btn" name="NoteAudio" onClick={this.onSelectTypeNote}><i className="fa fa-volume-up fa-keep"></i></button>
                    </div>

                    <input className="notesAdd-input" type="text" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Note's title" required />

                    {type === 'NoteText' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="What's in your mind..." required />
                    }
                    {type === 'NoteImg' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter image URL..." required />
                    }
                    {type === 'NoteTodos' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter comma separated list..." required />
                    }
                    {type === 'NoteVideo' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter video URL..." required />
                    }
                    {type === 'NoteAudio' &&
                        <input className="notesAdd-input" type="text" id="txt" name="txt" value={txt} onChange={this.handleChange} placeholder="Enter audio URL..." required />
                    }

                    <button className="btn" type="submit"><i className="fa fa-plus fa-keep"></i></button>
                </form>

            </div>
        )
    }
}