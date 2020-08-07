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
        // const { title, thumbnail } = c;
    }
    

    return (
        <div>

            <div className="cComic_container">
                <div className="cComic_main">
                    {loading || !display ? (<p>Loading...</p>) : (
                        <>
                            <div className="cComic_image">
                                {/* {console.log(c.thumbnail.path)} */}
                                <img src={`${c.thumbnail.path}.${c.thumbnail.extension}`} alt={c.title} height="400" width="100%"/>
                                {/* {c.title} */}
                            </div>
                            <div className="cComic_details">


                            </div>
                        </>

                    )}


                </div>

            </div>

        </div>
    )
}

export default Comic
