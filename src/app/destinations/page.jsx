import React from 'react';
import DestinationCard from '../components/destinationCard';

const DestinationsPage = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destinations = await res.json();

    console.log(destinations);
    return (
        <div className="m-5">
            <div className='destinations-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'> 
            {
                destinations.map(destination =>{
                    return(
                        <DestinationCard key={destination._id} destination={destination} /> 

                    )
                })
            }</div>
        </div>
    );
};

export default DestinationsPage;