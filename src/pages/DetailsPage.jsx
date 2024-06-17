import { useParams, Link, NavLink } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

export default function DetailsPage() {
    const {id} = useParams()
    const [newId, setNewId] = useState(id)
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState('')
    const [languages, setLanguages] = useState([])
    const [currencies, setCurrencies] = useState([])
    const [natName, setNatName] = useState([])
    const [natNameValue, setNatNameValue] = useState([])
    const [borders, setBorders] = useState([])
    
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/alpha/${newId}`
        axios.get(url)
        .then((res)=>{
            setDetails(res.data[0])
            setIsLoading(false)
            setLanguages(Object.values(res.data[0].languages))
            setCurrencies(Object.keys(res.data[0].currencies))
            setNatName(Object.keys(res.data[0].name.nativeName))
            setBorders(res.data[0].borders)
            setErrors('')
            })
        .catch(()=>{
            setErrors('We had some problems. please, try again later')
            setIsLoading(false)
        })
    }, [newId])

    useEffect(()=>{
        natName.map((e)=>{
            setNatNameValue(details.name.nativeName[e].common)
           })
    }, [natName])

    let BordersBtns = 'None'

    if(borders) {
         BordersBtns = borders.map((e)=>{
            return(
                <NavLink to={`/Details/${e}` } 
                         onClick={() => setNewId(e)}
                         key={e}>{e}
                </NavLink>
            )
        })
    }

    return  !isLoading && errors.length == 0 ? (
        <>
        <main className="detail-page">
        <Link className="detail-page--Back-btn" to={'/countries-of-the-world-React-App'}>
        Back
        </Link>
        <div className="detail-page__flag">
            <img src={details.flags.svg} alt={details.name} />
        </div>
        <div className="detail-page__container semi-bold-font">
            <div className="detail-page__information">
                <h3 className="country-name">{details.name.common}</h3>
                <p>Native Name:
                    <span>{natNameValue}</span>
                </p>
                <p>Population: <span>{Number(details.population).toLocaleString()}</span></p>
                <p>Region: <span>{details.region}</span></p>
                <p>Subregion: <span>{details.subregion}</span></p>
                <p>Capital: <span>{details.capital}</span></p>
            </div>
    
            <div className="detail-page__more-information">
                <p>Top Level Domain: 
                    <span>{details.tld[0]}</span>
                </p>
                <p>Currencies: 
                    <span>{currencies.map((e)=>{
                        return ` ${details.currencies[e].name}`
                        })}
                    </span>
                </p>
                <p>Languages: 
                    <span>{languages.join(', ')}
                    </span>
                </p>
            </div>

            <div className="border-container">
                <p>Border countries:</p>
                <span className="border-btns">{BordersBtns}</span>
            </div>
        </div>
        </main>
        </>
    ) : (<div className='loading-all'>
            {errors.length ? (<p>{errors}</p>):(<Loading/>)}
        </div>)
}