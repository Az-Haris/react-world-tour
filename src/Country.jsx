import { useState } from "react";
import "./Country.css"
import PropTypes from 'prop-types';

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className="card">
            <img src={flags.png} alt="" />
            <h2>Name : {name.common}</h2>
            <p>Official Name : {name.official}</p>
            <p>Area : {area} Sq Km</p>
            <p>Population : {population}</p>
            <p>Code : {cca3}</p>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'Visited this country' : 'I want to visit'}
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object
};

export default Country;