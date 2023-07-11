import Navbar from "../Components/Navbar";
import Page from "../Components/Page";
import AboutImg from "../Assets/with camel.jpg"
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";


function Contact() {
    return (
        <>
            <Navbar />
            <Page
                cName="page-contact"
                pageImg={AboutImg}
                title="Contact Us."

            />
            <ContactUs/>
            <Footer />


        </>
    )
}
export default Contact;