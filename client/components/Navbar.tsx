"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {
    const nav_items = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Pricing", href: "#menu" },
        { name: "Products", href: "#reviews" },
    ]

    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='bg-[#000310] w-full h-20 flex items-center justify-between px-6 md:px-30 py-4'>
            <a href='#' className='flex justify-center items-center gap-2'>
                <Image src="/logo.png" alt="logo" width={40} height={40} className='rounded' />
                <h1 className='text-2xl text-[#656FE4]'>TASKIFY</h1>
            </a>
            <div className='flex justify-between items-center md:w-[100%] w-34'>
                <ul className='hidden md:flex w-full justify-center items-center gap-8'>
                    {nav_items.map((item, index) => (
                        <li key={item.name + index}>
                            <a
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-white text-lg font-medium hover:text-yellow-400 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className='bg-[#656FE4] px-6 py-2.5 rounded-4xl text-md'>Signup</button>
                <div>{isOpen ? (
                    <button onClick={() => setIsOpen(false)}><X/></button>
                ) : (
                    <button onClick={() => setIsOpen(true)}><Menu/></button>
                )}</div>

                <aside
                    className={`fixed top-0 right-0 h-full w-72 bg-[#0B111E] backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-60 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Links */}
                    <nav className="mt-10 flex-1">
                        <ul className="flex flex-col space-y-6">
                            {nav_items.map((item, index) => (
                                <li key={item.name + index}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-white text-lg font-medium hover:text-yellow-400 transition"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>


                </aside>
            </div>
        </nav>
    )
}

export default Navbar