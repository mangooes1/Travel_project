import Navbar from "../Components/Navbar";
import Page from "../Components/Page";
import AboutImg from "../Assets/fuji.jpg"
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Page
                cName="page-middle"
                pageImg={AboutImg}
                title="About."

            />
            <AboutUs/>
            <Footer />


        </>
    )
}
export default About;