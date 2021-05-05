import { keepService } from './services/keep-service.js';


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
        keepService.editNote(id, this.state);
        this.props.onCloseModal();
    }



    render() {
        const { title, txt } = this.state;
        const { id } = this.props.note;
        return (

            <section className="note-update">
                <form className="note-update-form" onSubmit={this.onEditNote}>
                    <input type="text" id="titleToCahnge" name="title" value={title} onChange={this.handleChange} />
                    <textarea id="txtToChange" name="txt" value={txt} onChange={this.handleChange} />
                    <div class="updates-btns">
                        <button onClick={this.props.onCloseModal}>Cancel</button>
                        <button onClick={() => { this.props.onDeleteNote(id) }}>Delete</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </section >

        )
    }
}

