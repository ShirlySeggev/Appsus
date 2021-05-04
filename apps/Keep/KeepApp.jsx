import { NoteSearch } from './cmps/NoteSearch.jsx';
import { NotesAdd } from './cmps/NotesAdd.jsx';
import { NotesList } from './cmps/NotesList.jsx';

import { keepService } from './services/keep-service.js';


export class KeepApp extends React.Component {
    state = {
        notes: null,
        titleToSearch: null,
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


    render() {
        const { notes } = this.state;
        if (!notes) return <div>Loading...</div>
        return (
            <section className="keepApp-container">
                <header className="keepApp-header">
                    <NotesAdd loadNotes={this.loadNotes}/>
                    <NoteSearch onSetFilter={this.onSetFilter}/>
                </header>

                <main className="keepApp-notes-container">
                    <h1>Pinned notes:</h1>
                    <h1>Notes to display:</h1>
                    <NotesList notes={notes}/>
                </main>
            </section>
        )
    }
}