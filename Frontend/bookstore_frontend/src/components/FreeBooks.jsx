import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import booksData from '../../public/json/freeBook.json';
import BookCards from "./BookCards";

const FreeBooks = () => {
    const freeBooksData = booksData.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="mt-0">
            <div className="container">
                <p className="main-title">Free Offered Books</p>
                <Slider {...settings}>
                    {
                        freeBooksData?.map((data, id) => {
                            return (
                                <BookCards booksData={data} key={id} />
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default FreeBooks;
