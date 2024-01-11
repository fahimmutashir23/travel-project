
import { Rating } from '@mui/material';
import PropTypes from 'prop-types';

const TourPackagesCard = ({tourPackage}) => {
    const {name, destination, image, price, departureDate, ratings, reviews, duration} = tourPackage;
    return (
        <div className="flex h-[190px] max-w-4xl mx-auto bg-base-200">
                <div className="overflow-hidden w-1/3">
                    <img src={image} alt="" />
                </div>
                <div className="flex justify-between flex-1 p-5">
                    <div className="flex flex-col justify-between">
                       <div>
                       <h1 className="text-2xl font-semibold">{name}</h1>
                        <p className="text-sm">{duration} days</p>
                       </div>
                       <div className="flex gap-10">
                        <p className="text-sm uppercase flex flex-col"><span className='font-semibold -mb-1'>date</span>{departureDate}</p>
                        <p className="text-sm uppercase flex flex-col"><span className='font-semibold -mb-1'>departure</span>{destination}</p>
                       </div>
                       <div className="flex gap-4">
                        <button className="btn bg-green-500 text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-green-700">Show Reviews</button>
                        <button className="btn bg-red-500 text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-red-700">Read more</button>
                       </div>
                    </div>
                    <div className="flex flex-col justify-between">
                       <div className="flex flex-col">
                       <Rating sx={{fontSize: '22px'}} name="read-only" value={ratings} readOnly />
                        <p className="text-end font-semibold uppercase text-green-700">{reviews.length} Reviews</p>
                       </div>
                       <div>
                        <h1 className="text-2xl font-bold text-green-800 text-end">{price}$</h1>
                       </div>
                       <div className="flex justify-end">
                       <button className="btn bg-red-700 text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-red-500">Book now</button>
                       </div>
                    </div>
                </div>
            </div>
    );
};

TourPackagesCard.propTypes = {
    tourPackage: PropTypes.object,
};

export default TourPackagesCard;