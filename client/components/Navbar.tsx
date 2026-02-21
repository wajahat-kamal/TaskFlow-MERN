import React from 'react'

function Navbar() {
    const nav_items = ["Home", "About", "Tasks"]
    return (
        <nav className='bg-[#000310] w-full h-20 flex items-center justify-between px-20 py-4'>
            <div>
                {/* <img src="" alt="logo" /> */}
                <h1>Taskify</h1>
            </div>
            <ul className='w-full flex justify-center items-center gap-6'>
                {nav_items.map((item, index) => (
                    <li key={item + index} >
                        {item}
                    </li>
                ))}
            </ul>
            <button className='bg-[#8A77F2] px-6 py-2.5 rounded-4xl text-md'>Signup</button>
        </nav>
    )
}

export default Navbar