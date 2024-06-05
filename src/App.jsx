import { useState } from 'react'
import './App.css'

/*PAGES*/
import Home from './pages/Home.jsx'

/*COMPONENTS*/
import Header from './components/Header.jsx'

/*HOOKS*/


function App() {

   return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App