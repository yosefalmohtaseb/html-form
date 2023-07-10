import React from 'react'
import './style.css'
function Container({children}) {
  return (
    <div className='main-container'>{children}</div>
  )
}

export default Container