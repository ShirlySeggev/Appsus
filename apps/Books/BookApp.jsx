import { bookService } from './services/book-service.js';
import { BookList } from './cmps/BookList.jsx';
import { BookFilter } from './cmps/BookFilter.jsx';
import { BookAdd } from './cmps/BookAdd.jsx';

export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        isAddBookOpen: null
    }
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({ books })
            });
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks);
    }

    openModal=()=>{
        this.setState({ isAddBookOpen:!this.state.isAddBookOpen});
    }

    render() {
        const { books, isAddBookOpen } = this.state;
        if (!books) return <div>Loading...</div>
        return (
            <section className={isAddBookOpen? 'bookApp-container':''}>
                <header className="bookApp-header">
                    <BookAdd openModal={this.openModal}/>
                    <BookFilter onSetFilter={this.onSetFilter} />
                </header>
                <BookList books={books} />
            </section>
        )
    }
}


