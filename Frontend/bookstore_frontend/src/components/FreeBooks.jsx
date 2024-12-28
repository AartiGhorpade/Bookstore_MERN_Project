import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCards from "./BookCards";
import { useEffect, useState } from "react";
import axios from "axios";

const FreeBooks = () => {
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
    const [booksData, setBooksData] = useState([])
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/books')
                setBooksData(res.data.filter((data) => data.category === "Free"))
            } catch (e) {
                console.log(e);
            }
        }
        fetchedData()
    }, [])

    return (
        <section className="mt-0">
            <div className="container">
                <p className="main-title">Free Offered Books</p>
                <Slider {...settings}>
                    {
                        booksData?.map((data, id) => {
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
