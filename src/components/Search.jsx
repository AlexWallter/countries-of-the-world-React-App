import { useState, useEffect } from "react"
import Loading from "./Loading.jsx"
import axios from "axios"

export default function Search(prop) {
    const [searchCountry, setSearchCountry] = useState('')
    const [isLoading, setIsloading] = useState(false)

    useEffect(()=> {
        if(searchCountry.length !== 0) {

            const url = `https://restcountries.com/v3.1/name/`+searchCountry
            setIsloading(true)
            axios.get(url)
            
            .then((res)=>{
                prop.Sear(res.data)
                setIsloading(false)
                })
                .catch(() => {
                    setIsloading(false)
                    prop.Sear(`Sorry we had some problems with the data. Please, try again later.`)
                })
            }
            
        }, [searchCountry])

    return (
    <>
        <div className="searcher">
            <input type="search" 
                    className="searcher__input" 
                    placeholder="Search for a country..." 
                    onKeyDown={(e) => {
                        e.preventDefault
                        if (e.key === "Enter") {
                            setSearchCountry( e.target.value)
                        }
                    }}/>
                    {isLoading ? <Loading/> : null}
        </div>
    </>)
}