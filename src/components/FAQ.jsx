
import { FaQuestion } from "react-icons/fa";


const FAQ = () => {

    return (
        <div className="max-w-[1440px] mx-auto my-24 px-3">

            <div className="flex items-center gap-3 mb-10">
                <FaQuestion size='60' color="#8F6800" />
                <h3 className="text-5xl font-black text-[#8F6800]">Related FAQs</h3>
            </div>

            <div className="join join-vertical bg-base-100 w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title font-semibold text-2xl">What is Crowdcube?</div>
                    <div className="collapse-content text-lg">Crowdcube is an equity crowdfunding platform. You can invest money in return for equity in a business, and entrepreneurs can secure funding directly from their biggest supporters – you.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title font-semibold text-2xl" >What happens when I become a Crowdcube investor?</div>
                    <div className="collapse-content text-lg">If you invest in a business on Crowdcube you will become a shareholder in that company. In most cases your shares will be held on for you by Crowdcube Nominees Limited. The amount you invest, and the equity issued/number of shares bought will affect your percentage of ownership in the business. Once your investment has been processed and Crowdcube have collected your payment you will be sent your share documentation.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title font-semibold text-2xl">What is Crowdcube's equity crowdfunding due diligence process?</div>
                    <div className="collapse-content text-lg">We review and approve every pitch on the site to ensure that all the information is fair and clear.
                        We conduct due diligence on the company, its legal structure and directors using leading third-party providers like Creditsafe, Experian and Trulioo. We also verify evidence supporting any claims being made by the business, such as market size, contracts and partnerships to ensure the information provided is accurate. This process can take between 3-4 weeks, and sometimes longer if the company or raise is complicated.</div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;