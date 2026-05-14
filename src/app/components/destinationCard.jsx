import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuMapPinCheck } from 'react-icons/lu';

const DestinationCard = ({destination}) => {
    const {_id,destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className='border rounded-lg p-4 shadow-md  items-start'>
           
            <Image src={imageUrl} alt={destinationName} height={200} width={300} />
            <p>{description}</p>    
            <div>
                <div>
                    <span className='flex items-center gap-1'>
                        <LuMapPinCheck /> <p>{country}</p>
                    </span>
                    <div    className='flex justify-between font-bold items-start gap-1'> 
                     <h2>{destinationName}</h2>
            <p>Price: ${price}</p>
            </div>
            <p>{category}</p>
            <p>Duration: {duration} days</p>
            <p>Departure Date: {departureDate}</p>
                </div>
            </div>
            <Link href={`/destinations/${_id}`}>
                <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default DestinationCard;{}

// [
// {
// "_id": "6a0363707ba5045f07198148",
// "destinationName": "Lahore",
// "country": "Pakistan",
// "category": "Cultural",
// "price": "900",
// "duration": "15",
// "departureDate": "2026-05-14",
// "imageUrl": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
// "description": "dsafsfdgvfsg"
// },
// {
// "_id": "6a04823ce1d643dfe17f1690",
// "destinationName": "Balochistan",
// "country": "Pakistan",
// "category": "Adventure",
// "price": "900",
// "duration": "15",
// "departureDate": "2026-05-13",
// "imageUrl": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
// "description": "I love balochistan"
// }
// ]