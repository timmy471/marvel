import React, { useEffect, useState, useContext }  from 'react';
import CaptainCard from '../layouts/CaptainCard';

import ComicsContext from '../../context/comicsContext';
import '../../stylesheets/partials.css';

const CaptainMarvel = () => {

    const comicsContext = useContext(ComicsContext);

    const { getCaptainComics, captainComics } = comicsContext;

    useEffect(() => {
        getCaptainComics();
        //eslint-disable-next-line
        
    }, [])

    return (
        <div className="captain_marvel">

            <div className="filter_params">
                Date From:<input type="calendar" /> Date To: <input type="text" />
            </div>
            <div className="captain_comics_cont">
            <div className="captain_comics">
                {captainComics.map((comic)=>(
                    <CaptainCard comic={comic} key={comic.id}/>
                ))}
            </div>
            </div>
            
            
        </div>
    )
}



export default CaptainMarvel
