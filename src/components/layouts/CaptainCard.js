import React from 'react';
import { Link }from 'react-router-dom';

const CaptainCard = comic => {
    const { thumbnail, title, dates, id } = comic.comic;
    return (
        <Link to={`/comic/${id}`} style={linkStyle}>
            <div className="captain_card">
            <div className="captain_img">
                <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={title} />
            </div>
            <div className="cap_body">
                <p className="cap_title">{title}</p>
                <p className="cap_date">{dates[0].date}</p>
            </div>

        </div>
        </Link>
        
    )
}

const linkStyle={
    color:'black',
    textDecorattion:'none!important'
}

export default CaptainCard
