import React from 'react'
import { useLocation } from 'react-router'

function Employee() {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className='border-2 bg-amber-50 gap-4 p-4'>
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.department}</p>

    </div>
  )
}

export default Employee
