import Footer from "../Footer"
import Navbar from "../Navbar"
import Books from "./Books"
const AllBooks = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <p className="main-title text-center">We are excited to have you <span style={{ color: "purple" }}>with us!</span>
          </p>
          <p className="sub-title">Explore our wide range of resources and find the perfect books to suit your interests. Whether you are looking for free books or our curated selection of paid options, we have something for everyone. Happy reading!</p>
        </div>
        <Books />
      </section>
      <Footer />
    </>
  )
}

export default AllBooks