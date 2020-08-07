import React, { useEffect, useContext, useState } from 'react';
import ComicsContext from '../../context/comicsContext';
import '../../stylesheets/comic.css'

const Comic = props => {

    const comicsContext = useContext(ComicsContext);
    const { getComic, comic, loading } = comicsContext;

    // const [display, setDisplay] = useState(false);

    useEffect(() => {
        getComic(props.match.params.id);
        //eslint-disable-next-line
    }, [])

    let display = false;
    let c = comic[0];

    if (c && Object.keys(c).length > 0) {
        display = true;
    }
    

    return (
        <div>

            <div className="cComic_container">
                <div className="cComic_main">
                    {loading || !display ? (<p>Loading...</p>) : (
                        <>
                            <div className="cComic_image">
                                <img src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt={c.title} height="450" width="100%"/>
                            </div>
                            <div className="cComic_details">
                                <h2>{c.title}</h2>
                                <div className="main_details">
                                    <div className="grid1">
                                    <p><b>Published</b>: {c.dates[0].date.substr(0, 10 )}</p>
                                    <p><b>Characters</b>: {c.characters.items.map(creator => (
                                        `${creator.name}, `
                                    ))}</p>
                                    <p><b>Creators</b>: {c.creators.items.map(creator => (
                                        `${creator.name} (${creator.role}), `
                                    ))}</p>
                                    <p><b>FOC:</b> {c.dates[0].date.substr(0, 10 )}</p>
                                    </div>

                                    <div className="grid2">
                                    <p><b>Series:</b> {c.series.name}</p>
                                    <p><b>Stories:</b> {c.stories.items[0].name}, {c.stories.items[0].name}</p>
                                    <p><b>Print Price:</b>$ {c.prices[0].price}</p>
                                    </div>

                                    
                                </div>
                            </div>
                        </>

                    )}


                </div>

            </div>

        </div>
    )
}

export default Comic
