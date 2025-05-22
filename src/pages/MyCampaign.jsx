import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import moment from "moment";
import Swal from "sweetalert2";

const MyCampaign = () => {
    const loadedMyCampaigns = useLoaderData()
    const { user } = useContext(AuthContext)

    const [eachUserCampaigns, setEachUserCampaigns] = useState(loadedMyCampaigns)

    // const eachUserCampaigns = loadedMyCampaigns.filter(campaign => campaign.userEmail === user.email)


    useEffect(() => {
        setEachUserCampaigns(loadedMyCampaigns.filter(campaign => campaign.userEmail === user.email))
    }, [loadedMyCampaigns, user])

    const handleDeleteCampaign = (id) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setEachUserCampaigns(eachUserCampaigns.filter(campaign => campaign._id !== id))
                        }
                    })


            }
        });




    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1440px] mx-auto my-10 px-3">
                <section>
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
                                    eachUserCampaigns.map((campaign, idx) =>
                                        <tr key={idx} className="hover:bg-base-300">
                                            <th>{idx + 1}</th>
                                            <td>{campaign.title}</td>
                                            <td>{campaign.donateAmount}</td>
                                            <td>{`${moment(campaign.deadline).format("DD MMMM YYYY")}`}</td>
                                            <td>{campaign.userEmail}</td>
                                            <td className="flex items-center">
                                                {/* update button */}
                                                <Link to={`/updateCampaign/${campaign._id}`}> <FaEdit className="size-7 mr-10" /></Link>

                                                {/* delete button */}
                                                <button onClick={() => handleDeleteCampaign(campaign._id)}> <TiDeleteOutline className="size-8" /> </button>
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

export default MyCampaign;