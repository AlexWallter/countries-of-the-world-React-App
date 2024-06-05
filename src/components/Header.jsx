import { useState } from "react"

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
            <p className="bold-font">where in the world?</p>
            <p className="semi-bold-font mode-switch"
               onClick={()=>theme()}>Dark Mode</p>
        </header>
        </>
    )
}