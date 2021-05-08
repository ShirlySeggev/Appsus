export class MailSearch extends React.Component {
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

    onSearchMail = (ev) => {
        ev.preventDefault();
        console.log(this.state.titleToSearch);
        this.props.onSetFilter(this.state.titleToSearch);
     }


    render() {
        const { titleToSearch } = this.state
        return (
            <div className="mailToSearch-container">
                <form className="search-form" onSubmit={this.onSearchMail}>
                    <input className="search-input" type="text" id="search-input" name="search-input" value={titleToSearch} onChange={this.handleChange} placeholder="Search by title's mail" />
                    <button className="search-input-btn" type="submit">Search</button>
                </form>

            </div>
        )
    }
}