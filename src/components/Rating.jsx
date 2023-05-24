import React from 'react';
import starEmpty from '../assets/images/star_empty.svg';
import starFull from '../assets/images/star_full.svg';

const Rating = ({ rating }) => {
    // create an array of 5 elements
    // display a full star if the index is lower than the rating
    // display an empty star if the index is higher than the rating
    const stars = Array.from({ length: 5 }, (_, index) => {
        return (
            <img key={index} alt="star"
                src={index < rating ? starFull : starEmpty}
            />
        )
    }
    )
    return <div className="rating">{stars}</div>;
}

export default Rating;