import React from 'react'
import loader from './loader.svg'

// Import the necessary styles, or include them another way with your build process
import './Loader.css'

const Loader = () => {
    return (
      <img src={loader} alt='Loading...'/>
     )
      }
export default Loader;