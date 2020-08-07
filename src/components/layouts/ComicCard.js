import React from 'react';

const ComicCard = comic => {
    const {title, thumbnail} = comic.comic;
    return (
        
        <div className="comic_card">
            <div className="img_container">
                <img src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} alt={title}/>
            </div>
            <div className="card_body">
                <p className="card_title">{title}</p>
            </div>
            
        </div>
    )
} 

export default ComicCard
