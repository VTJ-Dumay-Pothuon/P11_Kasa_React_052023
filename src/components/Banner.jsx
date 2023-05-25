import React from 'react';
import '../styles/Banner.scss';

// deploymentPath is null if url is localhost, otherwise it is the name of the repository
const deploymentPath = process.env.PUBLIC_URL;

const Banner = ({ content }) => {
    // get the last part of the url (after the last /) and convert it to lowercase
    const page = window.location.pathname.split(`${deploymentPath}/`).pop().toLowerCase() || 'home';
    return (
        // the banner--page class determines the background image of the banner
        // if content is not empty, display it
        <div className={`banner banner--${page}`}>
        {content && <h1>{content}</h1>}
        </div>
    );
    }

export default Banner;