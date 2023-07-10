import React from 'react'
import './style.css'
function InsideContainer({children}) {
  return (
    <div className='inside-container'>{children}</div>
  )
}

export default InsideContainer