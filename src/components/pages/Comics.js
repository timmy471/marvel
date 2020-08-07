import React, { useEffect, useContext } from "react";
import ComicCard from '../layouts/ComicCard';

import ComicsContext from '../../context/comicsContext';
import '../../stylesheets/partials.css'

const Comics = () => {
    const comicsContext = useContext(ComicsContext);

    const { getComics, comics } = comicsContext;

    useEffect(() => {
       getComics();
       //eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="header" style={{textAlign:'center', marginTop:"3rem"}}>
                <h1>All Comics</h1>
            </div>
            <div className="comic_container">
            {comics.map( (comic) => (
                <ComicCard comic={comic} key={comic.id}/>
            ))}
            </div>
            
        </div>
    )
}

export default Comics
