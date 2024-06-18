import React from 'react'
import '../App.css'

export default function GradientButton(props) {
  return (
    <div className='buttonclass   px-3 py-2'>
        <p className='text-white font-RobotoRegular text-sm'>  {props.content}</p>
    
    </div>
  )
}
