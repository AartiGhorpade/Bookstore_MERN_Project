import { useState } from "react"
import Login from "../Authentications/Login"
import { useAuth } from "../Context/AuthProvider"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Books from "./Books"
import { Link } from "react-router-dom"
const AllBooks = () => {
  const [authUser, setAuthUser] = useAuth()
  const [showLogin, setShowLogin] = useState(false);
  function toggleLoginModal() {
    setShowLogin(!showLogin);
  }
  return (
    <>
      <Navbar />
      {
        authUser ? <section>
          <div className="container">
            <p className="main-title text-center">We are excited to have you <span style={{ color: "purple" }}>with us!</span>
            </p>
            <p className="sub-title">Explore our wide range of resources and find the perfect books to suit your interests. Whether you are looking for free books or our curated selection of paid options, we have something for everyone. Happy reading!</p>
          </div>
          <Books />
        </section> :
          <section className="container">
            <h1>Please <Link onClick={toggleLoginModal}>Login</Link> to see all books</h1>
          </section>
      }
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />

      <Footer />
    </>
  )
}

export default AllBooks