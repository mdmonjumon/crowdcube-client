import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import moment from "moment";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const DetailsPage = () => {
    const singleCampaign = useLoaderData()
    const { user } = useContext(AuthContext)

    const { userName, userEmail, title, photo, donateAmount, description, deadline, campaignType } = singleCampaign;

    const date = moment(deadline).format("DD MMMM YYYY");


    const handleDonate = () => {
        const donateInfo = {
            userName,
            userEmail,
            title,
            photo,
            donateAmount,
            description,
            deadline,
            campaignType,
            donorEmail: user.email,
            donorName:user.displayName
        }

        fetch('http://localhost:5000/donates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Donate Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1440px] mx-auto my-10 px-3">
                <section>
                    <div className="card bg-base-100 shadow-sm lg:w-3/4 mx-auto">
                        <figure>
                            <img className="size-full object-cover"
                                src={photo}
                                alt={title} />
                        </figure>
                        <div className="card-body p-3">
                            <div className="md:flex justify-between">
                                <div>
                                    <h2 className="card-title">{title}</h2>
                                    <p> <span className='text-lg font-medium'>Category: </span> <span className='text-base'>{campaignType}</span></p>
                                    <p> <span className='text-lg font-medium'>Deadline: </span> <span className='text-base'>{date}</span></p>
                                    <p> <span className='text-lg font-medium'>Donate Amount:</span> <span className='text-lg'>{donateAmount}</span></p>
                                </div>
                                <div className="p-5 shadow-xl rounded bg-base-200 my-3">
                                    <h4 className="text-xl font-semibold">Author Info</h4>
                                    <p><span>Name :</span> <span className="font-medium">{userName}</span></p>
                                    <p><span>Email :</span> <span className="font-medium">{userEmail}</span></p>
                                </div>
                            </div>
                            <p>{description}</p>

                            <div className="card-actions justify-center">
                                <button onClick={handleDonate} className="btn btn-primary mt-3">Donate</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DetailsPage;