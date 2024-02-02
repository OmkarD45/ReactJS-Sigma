import { useEffect } from "react"
import React from 'react'

const Navbar = (props) => {
    useEffect(() => {
      alert("Color was changed")
    }, [props.color])
    
  return (
    <div>
      This is Navbar {props.color}
    </div>
  )
}

export default Navbar
