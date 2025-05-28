import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";






const RunningCampaign = () => {

    const loadedCampaigns = useLoaderData()

    return (
        <div className="max-w-[1440px] mx-auto my-10 px-3">

            <Fade duration={2000}>
                <h2 className="text-5xl font-bold text-center mt-24">Running Campaign</h2>




                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        loadedCampaigns.map(campaign => <Card campaign={campaign} key={campaign._id}></Card>)
                    }

                </section>
            </Fade>
        </div>
    );
};

export default RunningCampaign;