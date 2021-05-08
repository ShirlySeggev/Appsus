export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            maxPrice: '',
            minPrice: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy);
        })
    }

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy);
    }


    render() {
        const { title, maxPrice, minPrice } = this.state.filterBy
        return (
            <div className="filterBy-container">
                <h3>Filter Books by:</h3>
                <form className="book-filter" onSubmit={this.onFilter}>
                    <input className="book-input" type="text" id="byTitle" name="title" value={title} onChange={this.handleChange} placeholder="Book name..." />
                    <input className="book-input" type="number" id="minPrice" name="minPrice" value={minPrice} onChange={this.handleChange} placeholder="From" />
                    <input className="book-input" type="number" id="maxPrice" name="maxPrice" value={maxPrice} onChange={this.handleChange} placeholder="Up to" />
                    {/* <button className="book-btn">Filter</button> */}
                </form>
            </div>
        )
    }
}
