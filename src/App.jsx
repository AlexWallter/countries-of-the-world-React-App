import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'

/*PAGES*/
import Home from './pages/Home.jsx'
import DetailsPage from './pages/DetailsPage.jsx'

/*COMPONENTS*/
import Header from './components/Header.jsx'

/*HOOKS*/


function App() {

   return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/countries-of-the-world-React-App' element= {<Home/>}/>
        <Route path='/Details/:id' element= {<DetailsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App