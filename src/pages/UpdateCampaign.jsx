
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCampaign = () => {

    const loadedUpdateCampaign = useLoaderData();
    const {
        _id,
        photo,
        title,
        campaignType,
        description,
        donateAmount,
        deadline,
        userEmail,
        userName } = loadedUpdateCampaign;

    const [minimumDonate, setMinimumDonate] = useState(donateAmount);
    const [startDate, setStartDate] = useState(deadline);

    const handleUpdateCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const campaignType = form.type.value;
        const description = form.description.value;
        const donateAmount = form.donateAmount.value;
        const deadline = form.date.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const updateInfo = {
            photo,
            title,
            campaignType,
            description,
            donateAmount,
            deadline: new Date(deadline).toISOString(),
            userEmail,
            userName
        }


        fetch(`https://crowdcube-server-ten.vercel.app/campaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Updated",
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
            <main>
                <section>
                    <div className="max-w-[1440px] mx-auto my-10 px-3">

                        <div>
                            <div className="hero bg-base-200">
                                <div className="hero-content flex-col">
                                    <div className="text-center lg:text-left">
                                        <h1 className="text-5xl font-bold text-center">Update Campaign</h1>
                                        <p className="py-6">
                                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        </p>
                                    </div>
                                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                                        <div className="card-body">
                                            <form onSubmit={handleUpdateCampaign}>
                                                <fieldset className="fieldset gap-5">

                                                    {/* title */}
                                                    <div>
                                                        <label className="font-medium text-lg">Campaign Title</label>
                                                        <input name="title" type="text" className="input w-full" placeholder="Title" required defaultValue={title} />
                                                    </div>


                                                    {/* image */}
                                                    <div>
                                                        <label className="font-medium text-lg">Photo URL</label>
                                                        <input name="photo" type="text" className="input w-full" placeholder="Photo url" required defaultValue={photo} />
                                                    </div>


                                                    {/* Campaign type */}
                                                    <div>
                                                        <label className="font-medium text-lg">Campaign Type</label>
                                                        <select name="type" defaultValue={campaignType} className="select w-full" required>
                                                            <option disabled={false}></option>
                                                            <option>Personal Issue</option>
                                                            <option>Startup</option>
                                                            <option>Business</option>
                                                            <option>Creative ideas</option>
                                                        </select>
                                                    </div>

                                                    {/* description */}
                                                    <div>
                                                        <label className="font-medium text-lg">Description</label>
                                                        <fieldset className="fieldset">
                                                            <textarea name="description" className="textarea h-24 w-full" placeholder="description" required defaultValue={description}></textarea>
                                                        </fieldset>
                                                    </div>

                                                    {/* Minimum donation amount */}
                                                    <div>
                                                        <label className="font-medium text-lg">Donation Amount</label>
                                                        <input onChange={(e) => setMinimumDonate(e.target.value)} name="donateAmount" type="number" className="input w-full" placeholder="Donate Amount" required defaultValue={minimumDonate} />
                                                        {minimumDonate < 100 ? <span className="text-sm text-rose-500">Donate minimum 100 tk or more</span> : ""}
                                                    </div>

                                                    {/* Deadline */}
                                                    <div className="fieldset gap-0">
                                                        <label className="font-medium text-lg">Deadline</label>
                                                        <DatePicker required name="date" className="input w-full"
                                                            selected={startDate}
                                                            onChange={(date) => setStartDate(date)}
                                                        ></DatePicker>
                                                    </div>


                                                    {/* user email */}
                                                    <div>
                                                        <label className="font-medium text-lg">User Email</label>
                                                        <input name="userEmail" type="email" className="input w-full" value={userEmail} required />
                                                    </div>


                                                    {/* user name */}
                                                    <div>
                                                        <label className="font-medium text-lg">User Name</label>
                                                        <input name="userName" type="text" className="input w-full" value={userName} required />
                                                    </div>


                                                    <button className="btn btn-neutral mt-4">Update</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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

export default UpdateCampaign;