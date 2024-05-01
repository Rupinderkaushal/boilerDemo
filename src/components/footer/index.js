import React, { useContext } from 'react'
import "./style.css"
import { ThemeContext } from '../themeProvider'
const Footer = () => {
 const {theme} = useContext(ThemeContext);
  return (
    <div className={`footer-wrapper ${theme}`}>Footer</div>
  )
}

export default Footer