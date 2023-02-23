import React from 'react'
import {GiAirplaneDeparture} from 'react-icons/gi'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
  <div className ="flex items-center flex-shrink-0 text-white mr-6">
    <GiAirplaneDeparture size={20}/>
    <span className="font-semibold text-xl tracking-tight uppercase px-3">Airport Info</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow align">
      <Link to="/blog" className="text-white uppercase mr-6 float-right">
        Blog
      </Link>
      <Link to="/docs" className="text-white uppercase mr-6 float-right">
        Docs
      </Link>
      <Link to="/" className="text-white uppercase mr-6 float-right">
        Home
      </Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
