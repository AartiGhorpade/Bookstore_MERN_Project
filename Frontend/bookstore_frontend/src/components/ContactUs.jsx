
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import toast from "react-hot-toast";


const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {

        const contactDetails = {
            name: data.name,
            email: data.email,
            message: data.message
        }

        await axios.post('http://localhost:4001/contact/contact', contactDetails).then((result) => {
            console.log(result);
            if (result.status === 201) {
                toast.success(result.data.message)
                reset();
            }
        }).catch((e) => {
            toast.error("Please try again later")
        })
    };
    return (

        <>
            <Navbar />
            <div className="row my-3 w-100">
                <div className="col-lg-5 m-auto col-12 booksCard p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex justify-content-between">
                            <h5 className="main-title">Contact Us</h5>
                        </div>
                        <div className="p-lg-5 py-4">
                            <input type="text" placeholder="Enter name" className="form-control input-box-hover-effect" {...register("name", { required: true })} />
                            {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                            <input type="email" placeholder="Enter email" className="form-control input-box-hover-effect mt-4"  {...register("email", { required: true })} />
                            {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                            <textarea placeholder="Enter message" className="form-control input-box-hover-effect mt-4" {...register("message", { required: true })} style={{ resize: 'none' }} />
                            {errors.message && <span style={{ color: 'red' }}>Message is required</span>}
                        </div>

                        <input type="submit" className="btn login-btn" value="Send" />

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs