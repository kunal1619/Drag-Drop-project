import React from 'react';
import Image from 'next/image';
import {MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid';




const Header = () => {
  return (
    <header>
        <div className='flex flex-col items-center md:flex-row justify-between bg-gray-500/10'>
        <Image
        src={'/img/logo.png'}
        alt='drag & drop logo'
        width={300}
        height={100}
        className='relative -top-10'
        />


        <div className='flex items-center space-x-3 relative -top-5 right-6'>
            {/* search-box */}

            <form className='flex items-center space-x-5 bg-white p-2 shadow-md flex-1 md:flex-initial'>
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                <input type="text" placeholder='search' className=' outline-none'/> 
                <button hidden>Search</button>
            </form>

            {/* Avatar */}
            <Image src="/img/user.jpg" alt="" height={100} width={100} className='rounded-full object-cover shadow-md h-16 w-16'/>
        </div>
        </div>
       


    </header>
  )
}

export default Header
