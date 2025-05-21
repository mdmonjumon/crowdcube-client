import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewCampaign from "../components/NewCampaign";


const AddCampaign = () => {
    return (
        <div>
            {/* Navbar */}
            <header>
                <Navbar></Navbar>
            </header>

            {/* add new campaign section*/}
            <section>
                <NewCampaign></NewCampaign>
            </section>



            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default AddCampaign;