import { useState, useEffect } from "react"
import Country from "./Country.jsx"
import Loading from "./Loading.jsx"
import axios from "axios"

export default function Search(prop) {
    const [searchCountry, setSearchCountry] = useState('')
    const [value, setValue] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(false)

    useEffect(()=> {
        if(searchCountry.length !== 0) {
            prop.Searched()
            const url = `https://restcountries.com/v3.1/name/`+searchCountry
            setIsloading(true)
            axios.get(url)
                
                .then((res)=>{
                    setValue(res.data)
                    setIsloading(false)
                })
                .catch(() => {
                    setError(`Sorry we had some problems with the data. Try again later.`)
                    setIsloading(false)
                })
            }
            
        }, [searchCountry])

        console.log(error)
    return error=='' && value.length !==0 ? (
        <>
        <div className="searcher">
            <input type="text" 
            className="searcher__input" 
            placeholder="Search for a country..." 
            onKeyDown={(e) => {
                e.preventDefault
                if (e.key === "Enter") {
                    setError('')
                    setSearchCountry( e.target.value)
                }
            }}
            />

            {isLoading ? <Loading/> : (
                <Country flag = {value[0].flags.png}
                     name = {value[0].name.common}
                     population = {value[0].population}
                     region = {value[0].region}
                     capital = {value[0].capital}
                     key={value[0].name.official}/>
            )}

        </div>
        </>
    ) : (
    <>
        <div className="searcher">
            <input type="search" 
                    className="searcher__input" 
                    placeholder="Search for a country..." 
                    onKeyDown={(e) => {
                        e.preventDefault
                        if (e.key === "Enter") {
                            setError('')
                            setSearchCountry( e.target.value)
                        }
                    }}/>
            <div>{error}</div>
                    {isLoading ? <Loading/> : null}
        </div>
    </>)
}