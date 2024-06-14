import {Link} from 'react-router-dom'

export default function Country({flag, name, population, region, capital, id}) {

    return (
        <>
            <Link to={`/Details/${id}`} className="country-card">
                <div to={`/Details/${id}`}>
                    <img src={flag} alt={name} />
                </div>
                <div className="country-card__detail">
                    <h3 className="country-card__name">{name}</h3>
                    <p className="country-card__popul"> <span className='semi-bold-font'>population:</span>{Number(population).toLocaleString()}</p>
                    <p className="country-card__region"> <span className='semi-bold-font'>Region:</span>{region}</p>
                    <p className="country-card__capital"> <span className='semi-bold-font'>Capital:</span>{Array.isArray(capital) ? capital.join(', '): capital}</p>
                </div>
            </Link>
        </>
    )
}