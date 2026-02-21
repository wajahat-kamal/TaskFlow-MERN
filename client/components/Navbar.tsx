import Image from 'next/image'
import React from 'react'

function Navbar() {
    const nav_items = ["Home", "About", "Tasks", "Pricing", "Products"]
    return (
        <nav className='bg-[#000310] w-full h-20 flex items-center justify-between px-6 md:px-30 py-4'>
            <a href='#' className='flex justify-center items-center gap-2'>
                <Image src="/logo.png" alt="logo" width={40} height={40} className='rounded' />
                <h1 className='text-2xl text-[#656FE4]'>TASKIFY</h1>
            </a>
            <div className='flex justify-between items-center md:w-[100%] w-40'>
                <ul className='hidden md:flex w-full justify-center items-center gap-8'>
                    {nav_items.map((item, index) => (
                        <li className='hover:text-[#656FE4] cursor-pointer' key={item + index} >
                            {item}
                        </li>
                    ))}
                </ul>
                <button className='bg-[#656FE4] px-6 py-2.5 rounded-4xl text-md'>Signup</button>
                <aside className='md:hidden block'>hey</aside>

            </div>
        </nav>
    )
}

export default Navbar