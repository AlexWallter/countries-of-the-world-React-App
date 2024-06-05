export default function Country({flag, name, population, region, capital}) {
    return (
        <>
            <div className="country-card">
                <img src={flag} alt={name} />
                <div className="country-card__detail">
                    <h3 className="country-card__name">{name}</h3>
                    <p className="country-card__popul"> <span className='semi-bold-font'>population:</span>{population}</p>
                    <p className="country-card__region"> <span className='semi-bold-font'>Region:</span>{region}</p>
                    <p className="country-card__capital"> <span className='semi-bold-font'>Capital:</span>{capital}</p>
                </div>
            </div>
        </>
    )
}