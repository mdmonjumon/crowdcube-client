import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Card from "../components/Card";


const MyDonations = () => {
    const loadedDonations = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user)
    const [singleUserDonations, setSingleUserDonations] = useState()

    useEffect(() => {
        setSingleUserDonations(loadedDonations.filter(donation => donation.donorEmail === user?.email))
    }, [loadedDonations, user])

    console.log(singleUserDonations)







    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="max-w-[1440px] mx-auto my-10 px-3">
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        singleUserDonations?.map(donation => <Card
                            key={donation._id}
                            campaign={donation}

                        ></Card>)
                    }
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyDonations;