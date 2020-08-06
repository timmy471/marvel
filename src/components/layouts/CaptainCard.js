import React from 'react'

const CaptainCard = comic => {
    const { thumbnail, title, dates } = comic.comic;
    return (
        <div className="captain_card">
            <div className="captain_img">
                <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt={title} />
            </div>
            <div className="cap_body">
                <p className="cap_title">{title}</p>
                <p className="cap_date">{dates[0].date}</p>
            </div>

        </div>
    )
}

export default CaptainCard
