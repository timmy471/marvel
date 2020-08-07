import React from 'react';
import Button from '../layouts/Button';
import Comics from './Comics';

const Landing = () => {
    const latestNews = [
        {
            id: 1,
            image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/empyre-3_card.jpg",
            title: "Comics",
            note: "How 'Empyre' #3 Brings Mothers to the Forefront"
        },
        {
            id: 2,
            image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/empyre2020002_cover_card.jpg",
            title: "Comics",
            note: "How 'Empyre' #2 Prepares the Universe for the Pyre"
        },
        {
            id: 3,
            image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/poster_6173647143001_54e00e0ed431f29c5f358d80d69d20f9.jpg",
            title: <span className="active">Marvel's The Pull list</span>,
            note: "X OF SWORDS & Mutant Madness in October 2020 | Marvel's Pull List"
        },
        {
            id: 4,
            image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/poster_6173647143001_54e00e0ed431f29c5f358d80d69d20f9.jpg",
            title: "Comics",
            note: "Exclusive Annoucement: New Marvel Comics Coming in October 2020"
        }
    ]
    return (
        <div className="container">
            <div className="desktop_banner">
                <div className="desktop_banner_text">
                    <div className="slash">
                        <h4>Carol Danvers</h4>
                    </div>
                    <h1>Captain Marvel</h1>
                    <p style={{ marginTop: "0!important" }}>Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
                </div>
            </div>
            <div className="mobile_header">
                <div className="mobile_banner">
                    <div className="mobile_banner_banner">

                    </div>
                    <div className="mobile_banner_text">
                        <h5 >Carol Danvers</h5>
                        <h2>Captain Marvel</h2>
                        <p style={{ marginTop: "0!important" }}>Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
                    </div>
                </div>
                <div className="mobile_social">
                    <ul>
                        <li>FOLLOW</li>
                        <li>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true" style={{ marginLeft: "1rem" }}></i>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="quick_navs">
                <div className="page_navs">
                    <ul>
                        <li>Overview</li>
                        <li>In comics Profile</li>
                        <li>In comics Full Report</li>
                    </ul>
                </div>
                <div className="social_navs">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true" style={{ marginLeft: "1rem" }}></i>
                </div>
            </div>
            <div className="captiain_marvel">
                <div className="captain_marvel_woman">
                </div>
                <div className="captain_marvel_text">
                    <h2>Captain Marvel</h2>
                    <p>Near death, Carol Danvers was transformed into a powerful warrior for the Kree.
                    Now, returning to Earth years later, she must remember her past in order to
                         to prevent a full invasion by shapeshifting aliens, the Skrulls.</p>

                    <Button text="Watch Now" />

                </div>
            </div>

            <div className="latest_news_container">
                <div className="latest_news">
                    {/* <div className="slash"> */}
                        <h2>Latest News</h2>
                    {/* </div> */}
                    <div className="latest_news_details">
                        {latestNews.map(ln => (
                            <div className='ln_card' key={ln.id}>
                                <div className="img_container">
                                    <img src={ln.image} alt={ln.title} style={{ maxWidth: "100%", maxHeight: "75%" }} />
                                </div>
                                <div className="ln_card_body">
                                    <span className="title">{ln.title}</span> <br />
                                    <span className="note">{ln.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="next_details">
                        <ul>
                            <li className="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>...</li>
                            <li>49</li>
                            <li>NEXT</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="comics">
                <div className="slash">
                    <h4>Comics</h4>
                </div>
                <Comics limit={true}/>
            </div> */}
            <div className="marvel_hq_container">
                <div className="marvel_hq">
                    <div className="marvel_hq_image">
                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelhq-promos-modules-featured-half-dsk-01.jpg" alt="promo" />
                    </div>
                    <div className="marvel_hq_text">
                        <h4 className="active">MARVEL HQ</h4>
                        <h2>Play games and read comics on MarvelHQ.com</h2>
                        <Button text="CHECK IT OUT!" />
                    </div>
                </div>


            </div>

            

        </div>
    )
}

export default Landing
