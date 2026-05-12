import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar flex justify-between m-5">
            <ul className='flex gap-6'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li> 
                    <Link href={"/destinations"}>Destinations</Link>
                </li>
                <li> 
                    <Link href={"/my-bookings"}>My Bookings</Link>
                </li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt={"Wanderlast"} height={100}
                width={120}></Image>
            </div>

            <div className=''>
                <ul className='flex gap-6'>
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