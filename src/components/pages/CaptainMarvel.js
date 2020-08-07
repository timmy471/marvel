import React, { useEffect, useState, useContext, lazy, Suspense } from 'react';

import ComicsContext from '../../context/comicsContext';
import Spinner from '../layouts/Spinner';
import '../../stylesheets/partials.css';

const LazyLoad = lazy( () => import('../layouts/CaptainCard'));

const CaptainMarvel = () => {

    const comicsContext = useContext(ComicsContext);

    const { getCaptainComics, captainComics } = comicsContext;

    const [date, setDate] = useState({
        from: "",
        to: "",
    });

    const { from, to } = date;

    useEffect(() => {
        getCaptainComics();
        //eslint-disable-next-line

    }, [])

    const onChange = e => {
        setDate({ ...date, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        if( to ==='' || from ===''){
            return alert('Please fill all fields');
        }

        if( to < from ){
            return alert('Start date can not be greater than End date');
        }
        getCaptainComics(to, from);
       
    }

    return (
        <div className="captain_marvel">
            <div className="captain_banner">

            </div>
            <div className="filter">

                <form onSubmit={onSubmit}>
                    <h4>Filter by Release Date</h4>
                    <ul className="filter_params">
                        <li>Date From: <input type="date" className="date_input"
                            value={from}
                            name="from"
                            onChange={onChange} /></li> &nbsp;
                    <li><span>Date To: </span> <input type="date" className="date_input"
                            value={to}
                            name="to"
                            onChange={onChange}/></li>
                    </ul>
                    <input type="submit" value="Filter" id="submitBtn" />
                </form>


            </div>
            <div className="captain_comics_cont">
                <div className="captain_comics">
                    {captainComics.map((comic) => (
                        <Suspense fallback={<Spinner />} key={comic.id} >
                            <LazyLoad comic={comic} />
                        </Suspense>
                        
                    ))}
                </div>
            </div>


        </div>
    )
}



export default CaptainMarvel
