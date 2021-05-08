import { keepService } from './services/keep-service.js';
import { eventBusService } from '../../../services/event-bus-service.js';
const { Link } = ReactRouterDOM;

export class NoteUpdate extends React.Component {
    state = {
        title: '',
        txt: '',
    }

    componentDidMount() {
        const { title } = this.props.note.info;
        const { id } = this.props.note;
        this.setState({ title, txt: keepService.getNoteText(id) });
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.value;
        this.setState({ ...this.state, [name]: value })
    }

    onEditNote = (ev) => {
        ev.preventDefault();
        const { id } = this.props.note;
        keepService.editNote(id, this.state)
            .then(eventBusService.emit('show-user-msg', { userMsg: <p> The note was successfully updated! </p>, type: 'success' }))
        // .catch(eventBusService.emit('show-user-msg', { userMsg: <p>Something went wrong..try again</p>, type: 'error' }))
        this.props.onCloseModal();
    }



    render() {
        const { title, txt } = this.state;
        const { id } = this.props.note;
        const { color } = this.props.note.style;
        return (
                <section className="note-update">
                    <form className="note-update-form" onSubmit={this.onEditNote}>
                        <input type="text" id="titleToCahnge" name="title" value={title} onChange={this.handleChange} style={{ color: `${color}` }} />
                        <textarea id="txtToChange" name="txt" value={txt} onChange={this.handleChange} style={{ color: `${color}` }} />
                        <div className="updates-btns">
                            <button className="btn" onClick={this.props.onCloseModal}><i className="fa fa-undo fa-keep"></i></button>
                            <button className="btn" onClick={() => { this.props.onDeleteNote(id) }}><i className="fa fa-trash fa-keep"></i></button>
                            <button className="btn" type="submit"><i className="fa fa-floppy-o fa-keep"></i></button>
                        </div>
                    </form>
                </section >
        )
    }
}

