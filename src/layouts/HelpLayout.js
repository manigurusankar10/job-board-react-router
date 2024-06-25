import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website help</h2>

      <nav>
        <NavLink to="faq">View the FAW</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
       
      <Outlet />
    </div>
  )
}
