import React from 'react';
import '../styles/Banner.scss';

const Banner = ({ content }) => {
    const page = window.location.pathname.split('/').pop().toLowerCase() || 'home';
    return (
        <div className={`banner banner--${page}`}>
        {content && <h1>{content}</h1>}
        </div>
    );
    }

export default Banner;