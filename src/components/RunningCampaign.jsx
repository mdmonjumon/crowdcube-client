import { useLoaderData } from "react-router-dom";


const RunningCampaign = () => {

    const loadedCampaign = useLoaderData()
    

    return (
        <div className="max-w-[1440px] mx-auto my-10 px-3">
            <h2 className="text-5xl font-bold text-center mt-24">Running Campaign</h2>

            <section>

            </section>
        </div>
    );
};

export default RunningCampaign;