import { useState } from 'react'

import Search from '../components/Search.jsx'
import RegionFilter from '../components/RegionFilter.jsx'
import Country from '../components/Country.jsx'
import Loading from '../components/Loading.jsx'
import useFetchCountries from '../hooks/useFetchCountries.jsx'

export default function Home() {
    const [countries, error, isLoading] = useFetchCountries()
    const [loadedCountries, setLoadedCountries] = useState(false)
    const [showRegion, setShowRegion] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [regionCountries, setRegionCountries] = useState([])
    const [searchedCountry, setSearchedCountry] = useState([])
    const [componentError, setComponentError] = useState('')


    //GETTING DATA FROM THE CHILD COMPONENTS
    const getDataRegion = (data) => {
        if(Array.isArray(data)) {
            setComponentError('')
            setLoadedCountries(true)
            setShowSearch(false)
            setShowRegion(true)
            setRegionCountries(data)
        } 
        else {
            setLoadedCountries(true)
            setShowSearch(false)
            setShowRegion(false)
            setComponentError(data)
        }
    }
  
    const getDataSearch = (data) => {
        if(Array.isArray(data)) {
            setComponentError('')
            setLoadedCountries(true)
            setShowSearch(true)
            setShowRegion(false)
            return setSearchedCountry(data)
        } 
        else {
            setLoadedCountries(true)
            setShowSearch(false)
            setShowRegion(false)
            setComponentError(data)
        }
    }

    //USING THE DATA TO MAKE THE COUNTRIES COMPONENTS
    const searched = searchedCountry.map((e)=>{
        return (
        <Country flag = {e.flags.png}
        name = {e.name.common}
        population = {e.population}
        region = {e.region}
        capital = {e.capital}
        key={e.name.official}/>
    )
    })

    const regionComponents = regionCountries.map((e)=>{
        return (
            <Country flag = {e.flags.png}
            name = {e.name.common}
            population = {e.population}
            region = {e.region}
            capital = {e.capital}
            key={e.name.official}/>
        )
    })

    const countriesComponents = countries.map((e)=>{
      return (
        <Country flag = {e.flags.svg}
                 name = {e.name.common}
                 population = {e.population}
                 region = {e.region}
                 capital = {e.capital[0]}
                 key={e.name.official}/>
      )
    })
    
    return isLoading ?  (
        <div className='loading-all'>
            <Loading/>
        </div>
    ): (
        <>
        <div className="search-container">
            <Search
            Sear = {getDataSearch}/>
            <RegionFilter
            region = {getDataRegion}/>
        </div>
            <div className='homePage'>
                {componentError!== ''?(<h3 className='error-message'>{componentError}</h3>):null}
                {showRegion ? regionComponents: null}
                {showSearch ? searched :null}
                {loadedCountries ? null : <>{countriesComponents}</>}
            </div>
        </>
    )
}