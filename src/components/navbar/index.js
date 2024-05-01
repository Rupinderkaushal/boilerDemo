import React, { useContext } from 'react'
import "./style.css";
import  {ThemeContext} from "../themeProvider/index";
const Navbar = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={` nav-wrapper ${theme} `}>Navbar</div>
  )
}

export default Navbar