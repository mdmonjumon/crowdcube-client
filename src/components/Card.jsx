import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

const Card = ({ campaign }) => {
    const { _id, photo, title, campaignType, donateAmount, deadline } = campaign;

    const date = moment(deadline).format("DD MMMM YYYY");

    const location = useLocation()


    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Tooltip id="my-tooltip" />
                    <img className="md:h-80 size-full object-cover"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={title}
                        data-tooltip-place="center"
                        src={photo}
                        alt={title} />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title">{title}</h2>
                    <p> <span className='text-lg font-medium'>Category: </span> <span className='text-base'>{campaignType}</span></p>
                    <p> <span className='text-lg font-medium'>Deadline: </span> <span className='text-base'>{date}</span></p>
                    <p> <span className='text-lg font-medium'>Donate Amount:</span> <span className='text-lg'>{donateAmount}</span></p>

                    <div className="card-actions justify-start">
                        {
                            location.pathname === '/myDonations' ? '' : <Link to={`/campaign/${_id}`} className="btn btn-primary">See More</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;