import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

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


            {/* footer */}
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Home;