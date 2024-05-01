import React, { useContext } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {ThemeContext} from "../components/themeProvider/index"

const Layout = ({children}) => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    console.log("theme",theme)
  return (
    <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout