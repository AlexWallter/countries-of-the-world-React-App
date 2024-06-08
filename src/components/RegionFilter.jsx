import axios from "axios"
import { useEffect, useState } from "react"

import Loading from "./Loading"

export default function RegionFilter(prop) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [filterView, setFilterView] = useState(false)
    const [region, setRegion] = useState('filter by region')
    
    useEffect(()=>{
        if(region !== 'filter by region') {
            setIsLoaded(true)
            const url = `https://restcountries.com/v3.1/region/`+region
            axios.get(url)
            .then((res)=>{
                prop.region(res.data)
                setIsLoaded(false)

                })
                .catch(() => {
                    prop.region(`Sorry we had some problems with the data. Please, try again later.`)
                    setIsLoaded(false)
                })
        }
    }, [region])

    return (
        <>
            <div className="searcher__region-filter semi-bold-font"
                 onClick={()=>{setFilterView(!filterView)}}
            >
                <p className="searcher__region-filter__title"
                    >{region}</p>
                <div className= {`searcher__region-filter--options ${filterView?'visible':''}`}>

                    <div className="searcher__region-filter--select"
                    onClick={()=> {
                        setRegion('Africa') 
                        setFilterView(!filterView)  
                    }}>Africa</div>

                    <div className="searcher__region-filter--select"
                    onClick={()=> {
                        setRegion('America') 
                        setFilterView(!filterView)  
                    }}>America</div>

                    <div className="searcher__region-filter--select"
                    onClick={()=> {
                        setRegion('Asia') 
                        setFilterView(!filterView)  
                    }}>Asia</div>

                    <div className="searcher__region-filter--select"
                       onClick={()=> {
                        setRegion('Europe') 
                        setFilterView(!filterView)  
                    }}>Europe</div>

                    <div className="searcher__region-filter--select"
                    onClick={()=> {
                        setRegion('Oceania') 
                        setFilterView(!filterView)  
                    }}>Oceania</div>
                </div>
            </div>
            {isLoaded?<Loading/>:null}
        </>
    )
}