import Navbar from "../Components/Navbar";
import Page from "../Components/Page";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Page
                cName="page"
                pageImg="https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                title="Adventure Awaits."
                text="Choose your experience with us!!"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Footer/>

        </>
    )
}
export default Home;