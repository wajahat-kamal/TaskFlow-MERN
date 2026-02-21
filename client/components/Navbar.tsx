import React from 'react'

function Navbar() {
    const nav_items = ["Home", "About", "Tasks"]
  return (
    <nav>
        <div>
            <img src="" alt="" />
            <h1>Taskify</h1>
        </div>
        <div>
            {nav_items.map((item, index) => (
                <ul key={item+index}>
                    <li>{item}</li>
                </ul>
            ))}
        </div>
        <div>
            <button>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar