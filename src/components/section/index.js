import React, { useContext } from 'react'
import "./style.css"
import { ThemeContext } from '../themeProvider'

const Section = () => {
 const {theme} = useContext(ThemeContext);
  return (
    <div className={`section-wrapper ${theme}`}>
      <p className='font-bold'>Section</p>
    </div>
  )
}

export default Section