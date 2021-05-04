export class NoteSearch extends React.Component {
    state = {
        titleToSearch: ''
    }

    componentDidMount() {
    }

    handleChange = ({ target }) => {
        const { value } = target
        this.setState({ titleToSearch: value },()=>{
            this.props.onSetFilter(this.state.titleToSearch);
        })
    }

    onSearchNote = (ev) => {
        ev.preventDefault();
        console.log(this.state.titleToSearch);
        this.props.onSetFilter(this.state.titleToSearch);
     }


    render() {
        const { titleToSearch } = this.state

        return (
            <div className="noteSearch-container">
                <form className="search-form" onSubmit={this.onSearchNote}>
                    <input className="search-input" type="text" id="search-input" name="search-input" value={titleToSearch} onChange={this.handleChange} placeholder="Search by title's note" />
                    <button type="submit">Search</button>
                </form>

            </div>
        )
    }
}