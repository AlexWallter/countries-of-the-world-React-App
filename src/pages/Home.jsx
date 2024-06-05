import { useState } from 'react'

import Search from '../components/Search.jsx'
import Country from '../components/Country.jsx'
import Loading from '../components/Loading.jsx'
import useFetchCountries from '../hooks/useFetchCountries.jsx'

export default function Home() {
    const [countries, error, isLoading] = useFetchCountries()
    const [loadedCountries, setLoadedCountries] = useState(false)

    const getData = () => {
        setLoadedCountries(true)
        console.log('works')
    }
  
    const countriesComponents = countries.map((e)=>{
      return (
        <Country flag = {e.flags.svg}
                 name = {e.name.common}
                 population = {e.population}
                 region = {e.region}
                 capital = {e.capital}
                 key={e.name.official}/>
      )
    })
    
    return isLoading ?  (
        <>
            <Loading/>
        </>
    ): (
        <>
        <div className="search-container">
            <Search
            Searched = {getData}/>
            <div className="searcher__region-filter">
                <p>filter by region</p>
            </div>
        </div>
            <div className='homePage'>
                {loadedCountries ? <div></div> : <>{countriesComponents}</>}
            </div>
        </>
    )
}