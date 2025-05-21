import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import firstSlider from '../assets/banner-1.svg'







const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-10 px-3'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={4000}
                className='h-[400px] rounded-2xl'>
                {/* slider 1 */}
                <div className='space-y-5 text-center px-2' style={{ backgroundImage: `url(${firstSlider})`, borderRadius: '12px' }}>
                    <h2 className='text-3xl font-semibold text-white'><strong>Support When It Matters Most</strong></h2>
                    <h3 className='text-xl font-medium text-white'>&quot;Raise funds for life’s unexpected challenges.&quot;</h3>
                    <p className='text-lg text-white md:w-1/2 mx-auto text-justify'>Whether it's medical bills, educational needs, or emergency expenses — start a campaign and let your community lend a hand when you need it the most.</p>

                </div>


                {/* slider 2 */}
                <div className='space-y-5 text-center px-2'
                    style={{ backgroundImage: `url(${firstSlider})`, borderRadius: '12px' }}>

                    <h2 className='text-3xl font-semibold text-white'><strong>Bring Your Ideas to Life</strong></h2>
                    <h3 className='text-xl font-medium text-white'>&quot;Turn passion into a funded project.&quot;</h3>
                    <p className='text-lg text-white md:w-1/2 mx-auto text-justify'>Share your creative vision — be it a film, app, music album, or book — and gather support from people who believe in your art and innovation.</p>

                </div>

                {/* slider 3 */}
                <div className='space-y-5 text-center px-2'
                    style={{ backgroundImage: `url(${firstSlider})`, borderRadius: '12px' }}>

                    <h2 className='text-3xl font-semibold text-white'><strong>Launch Your Startup with Community Support</strong></h2>
                    <h3 className='text-xl font-medium text-white'>&quot;Raise capital to grow your business.&quot;</h3>
                    <p className='text-lg text-white md:w-2/3 mx-auto text-justify'>Pitch your product or startup idea to everyday investors. Crowdfund the resources you need to build, launch, and scale your business.</p>
                </div>


            </AutoplaySlider>

        </div>
    );
};

export default Banner;