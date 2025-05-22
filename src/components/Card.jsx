import moment from "moment";

const Card = ({campaign}) => {
    const {photo, title, campaignType, donateAmount, deadline}= campaign;

    const date = moment(deadline).format("DD MMMM YYYY");
    
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="md:h-80 size-full object-cover"
                        src={photo}
                        alt={title} />
                </figure>
                <div className="card-body p-3">
                    <h2 className="card-title">{title}</h2>
                    <p> <span className='text-lg font-medium'>Category: </span> <span className='text-base'>{campaignType}</span></p>
                    <p> <span className='text-lg font-medium'>Deadline: </span> <span className='text-base'>{date}</span></p>
                    <p> <span className='text-lg font-medium'>Donate Amount:</span> <span className='text-lg'>{donateAmount}</span></p>
                    
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;