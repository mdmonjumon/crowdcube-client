
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const NewCampaign = () => {

    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState()
    const [minimumDonate, setMinimumDonate] = useState()

    const handleAddNewCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const campaignType = form.type.value;
        const description = form.description.value;
        const donateAmount = form.donateAmount.value;
        const deadline = form.date.value;



        const campaignInfo = {
            photo: photo,
            title: title,
            campaignType: campaignType,
            description: description,
            donateAmount: donateAmount,
            deadline: deadline
        }


        fetch('http://localhost:5000/addCampaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaignInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Campaign Successfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                    setStartDate()
                }
            })

    }


    return (
        <div className="max-w-[1440px] mx-auto my-10 px-3">

            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Add New Campaign</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleAddNewCampaign}>
                                    <fieldset className="fieldset gap-5">
                                        {/* image */}
                                        <div>
                                            <label className="font-medium text-lg">Photo URL</label>
                                            <input name="photo" type="text" className="input w-full" placeholder="Photo url" required />
                                        </div>

                                        {/* title */}
                                        <div>
                                            <label className="font-medium text-lg">Campaign Title</label>
                                            <input name="title" type="text" className="input w-full" placeholder="Title" required />
                                        </div>

                                        {/* Campaign type */}
                                        <div>
                                            <label className="font-medium text-lg">Campaign Type</label>
                                            <select name="type" defaultValue="Select Campaign Type" className="select w-full" required>
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
                                                <textarea name="description" className="textarea h-24 w-full" placeholder="description" required></textarea>
                                            </fieldset>
                                        </div>

                                        {/* Minimum donation amount */}
                                        <div>
                                            <label className="font-medium text-lg">Donation Amount</label>
                                            <input onChange={(e) => setMinimumDonate(e.target.value)} name="donateAmount" type="number" className="input w-full" placeholder="Donate Amount" required />
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
                                            <input name="userEmail" type="email" className="input w-full" value={user.email} required />
                                        </div>


                                        {/* user name */}
                                        <div>
                                            <label className="font-medium text-lg">User Name</label>
                                            <input name="userName" type="text" className="input w-full" value={user.displayName} required />
                                        </div>


                                        <button disabled={minimumDonate < 100 ? true : false} className="btn btn-neutral mt-4">Add</button>
                                    </fieldset>

                                    {/* <fieldset className="fieldset">
                                        <label className="font-medium text-lg">Deadline</label> <br />
                                        <DatePicker required name="date" className="input w-full"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        ></DatePicker>
                                    </fieldset> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewCampaign;