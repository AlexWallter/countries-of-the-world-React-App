import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [darkTheme, setDarkTheme] = useState(false)
    const root = document.querySelector('#root')
    
    const theme = () => {
        setDarkTheme(!darkTheme)
        if(darkTheme) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }
    
    return(
        <>
        <header className="page-header">
            <Link className="bold-font" to={"/countries-of-the-world-React-App"}>where in the world?</Link>
            <p className="semi-bold-font mode-switch"
               onClick={()=>theme()}>Dark Mode</p>
        </header>
        </>
    )
}