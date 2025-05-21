import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import RunningCampaign from '../components/RunningCampaign';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* navbar */}
            <header>
                <Navbar></Navbar>
            </header>


            {/* banner section */}
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Outlet></Outlet>
            </section>


            {/* footer */}
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Home;