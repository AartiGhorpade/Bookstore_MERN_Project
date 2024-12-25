import '../assets/css/booksCard.css'

const BookCards = (props) => {
    const data = props.booksData;

    return (
        <div className="card mx-3 booksCard">
            {/* Debugging: Log image URL to console */}
            <img className="card-img-top w-75 m-auto mt-2" src={data.image} alt={data.name} />
            <div className="card-body">
                <h5 className="card-title">{data.booktype} <span>{data.category}</span></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                <div className="row">
                    <div className="col-6 book-price"><span>Rs.{data.price}</span></div>
                    <div className="col-6 book-buy-now d-flex justify-content-end"> <span>Buy Now</span></div>
                </div>
            </div>
        </div>
    );
}

export default BookCards;
