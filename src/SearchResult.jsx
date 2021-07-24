import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchReaults">
            <img src={img} alt="" />
            <FavoriteBorderIcon className='searchResult-heart'/>

            <div className='searchResult-info'>
                 
                 <div className="searchInfo_top">
                     <p>{location}</p>
                     <h3>{title}</h3>
                     <p>____</p>
                     <p>{description}</p>
                 </div>
                 <div className="searchInfo_bottom">
                     <div className="searchResult__stars">
                         <StarIcon className="searchResult_star"/>
                         <p><strong>{star}</strong></p>
                     </div>

                     <div className="searchResults__price">
                         <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                 </div>
            </div>
        </div>
    )
}

export default SearchResult
