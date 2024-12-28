import { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [booksData, setBooksData] = useState([])
    useEffect(() => {

        const fetchedData = async () => {
            try {
                const res = await axios.get('http://localhost:4001/books')
                setBooksData(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchedData()
    }, [])

    return (
        <section>
            <div className='container'>
                <div>
                    <div className="row">
                        {
                            booksData?.map((data, ind) => {
                                return (

                                    <div className="col-lg-4 col-md-6 col-12" key={ind}>
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
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Books