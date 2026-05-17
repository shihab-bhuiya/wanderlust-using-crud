import { DeleteAlert } from '@/app/components/DeleteAlert';
import { EditModal } from '@/app/components/editModal';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const DestinationDetailsPage = async ({params}) => {
    const {id} =await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destinations = await res.json();
    console.log("Destination ID:", id); // Log the ID to verify it's being received correctly
    return (
        <div>
          <div className='flex justify-end items-center gap-2 mt-5 mr-5'>
            <EditModal destinations={destinations} />
          <DeleteAlert destinations={destinations}/>
          </div>
            <h1 className='text-center text-3xl font-bold'>{destinations.destinationName}</h1>
            <p className='text-center text-xl mt-4'>{destinations.country}</p>
            <p className='text-center text-lg mt-2'>{destinations.category}</p> 
            <p className='text-center text-md mt-2'>{destinations.description}</p>
             <Image src={destinations.imageUrl} height={300} width={300} alt={destinations.destinationName} className='mx-auto mt-4 rounded-lg w-full max-w-md' />

        </div>
    );
};

export default DestinationDetailsPage;