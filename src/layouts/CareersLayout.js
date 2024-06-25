import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className='careers-layout'>
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit epturi repellat, fugit ct, quo eos?</p>
      <Outlet />
    </div>
  )
}
