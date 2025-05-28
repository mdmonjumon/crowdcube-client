import { Link, useLoaderData, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import moment from "moment";
import { useState } from "react";


const AllCampaigns = () => {

    const loadedAllCampaigns = useLoaderData()

    const [allCampaign, setAllCampaign] = useState(loadedAllCampaigns)

    const handleSortByDonationAmount = () => {

        setAllCampaign([...allCampaign].sort((a, b)=> b.donateAmount - a.donateAmount))

    }

return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="max-w-[1440px] mx-auto my-10 px-3">
            <section>
                <div className="flex justify-end">
                    <button onClick={handleSortByDonationAmount} className="btn btn-ghost">Sort by Donation</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Campaign Title</th>
                                <th>Minimum Donate Amount</th>
                                <th>Deadline</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            {
                                allCampaign.map((campaign, idx) =>
                                    <tr key={idx} className="hover:bg-base-300">
                                        <th>{idx + 1}</th>
                                        <td>{campaign.title}</td>
                                        <td>{campaign.donateAmount}</td>
                                        <td>{`${moment(campaign.deadline).format("DD MMMM YYYY")}`}</td>
                                        <td>{campaign.userEmail}</td>
                                        <td className="flex items-center">
                                            {/* update button */}
                                            <Link to={`/campaign/${campaign._id}`} className="btn btn-info"> See More</Link>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </main>
        <footer>
            <Footer></Footer>
        </footer>

    </div>
);
};

export default AllCampaigns;