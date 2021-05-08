import { bookService } from '../services/book-service.js';
import { utilService } from '../../../services/util-service.js';
import { ReviewPreview } from '../cmps/ReviewPreview.jsx';


export class ReviewAdd extends React.Component {
    state = {
        id: utilService.makeId(),
        userName: '',
        date: '',
        rate: 0,
        freeText: ''
    }

    componentDidMount() {
    }

    onAddReview = (ev) => {
        ev.preventDefault();
        bookService.addReview(this.props.book.id, this.state)
            .then((book) => {
                this.props.onReviewAdd(book)
                this.setState({ id: utilService.makeId(),
                    userName: '',
                    date: '',
                    rate: 0,
                    freeText: '' })
                // this.props.history.push(`/book`)
            })
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.type === 'select-one' ? +target.value : target.value;
        this.setState({ ...this.state, [name]: value })

    }

    render() {
        const { userName, date, rate, freeText } = this.state;
        return (
            <div className="review-container">
                <div className="reviews">
                    <h4>Reviews:</h4>
                    <ReviewPreview reviews={this.props.book.reviews} onDeleteReview={this.props.onDeleteReview} />
                </div>
                <form className="review-form" onSubmit={this.onAddReview}>
                    <input className="book-input" type="text" id="userName" name="userName" value={userName} onChange={this.handleChange} placeholder="Your Name" required />
                    <input className="book-input" type="date" id="date" name="date" value={date} onChange={this.handleChange} />

                    <label htmlFor="rate">Rate
                    <select className="review-select" name="rate" id="rate" value={rate} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>

                    <textarea id="freeText" name="freeText" cols="40" rows="3" value={freeText} onChange={this.handleChange} placeholder="The review..."/>

                    <button className="book-btn" type="submit">Submit</button>
                </form>

            </div>
        )
    }
}


