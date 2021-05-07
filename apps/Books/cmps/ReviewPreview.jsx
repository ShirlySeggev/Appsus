export function ReviewPreview({ reviews, onDeleteReview }) {

    if (!reviews || !reviews.length) return <div>No reviews yet...</div>;

    return (
        <div className="reviews-container">
            {reviews.map(review => {
                return <div className="review" key={review.id}>
                    <p className="x-btn" onClick={() => {
                        onDeleteReview(review.id)
                    }}>X</p>
                    <p>User: {review.userName} | Rate: {review.rate} | {review.date} </p>
                    <p>{review.freeText}</p>
                </div>
            })}
        </div>
    )
}