import React from 'react';
import '../styles/Banner.scss';

const Banner = ({ content }) => {
    // get the last part of the url (after the last /) and convert it to lowercase
    const page = window.location.pathname.split('/').pop().toLowerCase() || 'home';
    return (
        // the banner--page class determines the background image of the banner
        // if content is not empty, display it
        <div className={`banner banner--${page}`}>
        {content && <h1>{content}</h1>}
        </div>
    );
    }

export default Banner;