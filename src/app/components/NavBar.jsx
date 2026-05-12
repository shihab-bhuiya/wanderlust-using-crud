import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between px-5 py-4 gap-4">
            
            {/* Left side-bar */}
            <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li> 
                    <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li> 
                    <Link href={"/my-bookings"}>My Bookings</Link>
                </li>
                <li> 
                    <Link href={"/add-destination"}>Add Destionation</Link>
                </li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt={"Wanderlast"} height={100}
                width={120}></Image>
            </div>

            <div className=''>
                <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
                    <li>
                        <Link href={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link href={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link href={'/sign-up'}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;