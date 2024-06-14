import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetchCountries() {
    const url = 'https://restcountries.com/v3.1/all?fields=flags,capital,region,population,cca3,name'
    const [countries, setCountries] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        axios.get(url)
        
        .then((res)=>{
            setCountries(res.data)
            setIsLoading(false)
        })
        
        .catch((e) => {
                setError(e.message)
                setIsLoading(false)
            })
    }, [])

    return [countries, error, isLoading]
}