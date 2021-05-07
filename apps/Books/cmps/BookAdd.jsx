
import { bookService } from '../services/book-service.js';
import { eventBusService } from '../../../services/event-bus-service.js';

export class BookAdd extends React.Component {
    state = {
        bookToSearch: '',
        booksFound: []
    }

    handleChange = ({ target }) => {
        const { value } = target
        this.setState({ bookToSearch: value })
    }

    onSearchBook = (ev) => {
        ev.preventDefault();
        this.props.openModal();
        bookService.searchBook(this.state.bookToSearch)
            .then((books) => {
                console.log(books);
                this.setState({ booksFound: books })
            })
    }

    onAddBook = (book) => {
        const userMsg = <div>
            <p> Book ${book.volumeInfo.title} was successfully added! </p>
            <a href={`/#/book/${book.id}`}>Check it Out</a>
        </div>
        bookService.addGoogleBook(book)
            .then(eventBusService.emit('show-user-msg', { userMsg, type: 'success' }))
        // .catch(eventBusService.emit('show-user-msg', { userMsg:<p>Something went wrong..try again</p>, type: 'error' }))

    }

    closeModal = () => {
        this.setState({ bookToSearch: '', booksFound: [] })
        this.props.openModal();
    }


    render() {
        const { bookToSearch, booksFound } = this.state

        return (
            <div className="book-search">
                <form className="book-to-search" onSubmit={this.onSearchBook}>
                    <input className="book-input" type="text" id="bookToSearch" name="bookToSearch" value={bookToSearch} onChange={this.handleChange} placeholder="Add a new book..." />
                    <button className="book-btn" type="submit">Search</button>
                </form>

                {booksFound.length &&
                    <div className="book-result">
                        {booksFound.map(book => {
                            return <div className="book-found" key={book.id}>
                                <h5> {book.volumeInfo.title} </h5>
                                <button className="book-btn" onClick={() => { this.onAddBook(book) }}>+</button>
                            </div>
                        })}

                        <button className="book-btn" onClick={this.closeModal}>Close</button>

                    </div>

                }
            </div>
        )
    }
}