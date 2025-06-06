import { useTypewriter } from 'react-simple-typewriter'

import investImage from '../assets/invest.jpg'

const Invest = () => {


    const [text] = useTypewriter({
        words: ['confidence'],
        loop: 0,
        typeSpeed:100,
        deleteSpeed:80,

    })

    return (
        <div className='max-w-[1440px] mx-auto my-10 px-3 lg:flex items-center'>
            <div className='flex-1/2'>

                <h2 className='text-4xl lg:text-7xl font-bold text-green-500'>Invest in the future, simply, safely and with<span> {text}</span></h2>

                <p className='text-lg font-semibold mt-10'>Own shares in some of most exciting high-growth, private businesses from just 100 Taka, investing alongside and on the same terms as institutional investors.</p>
            </div>
            <div className='flex-1/2'>
                <img className='rounded' src={investImage} alt="" />
            </div>

        </div>
    );
};

export default Invest;