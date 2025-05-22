import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


const AllCampaigns = () => {

    const loadedAllCampaigns = useLoaderData()

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1440px] mx-auto my-10 px-3">
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        loadedAllCampaigns.map(campaign=><Card key={campaign._id} campaign={campaign}></Card>)
                    }
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default AllCampaigns;