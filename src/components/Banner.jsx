import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Banner.scss';

const Banner = ({ content }) => {
  const location = useLocation();
  const extractedPath = location.pathname.substring(1).toLowerCase();
  const page = extractedPath !== '' ? extractedPath : 'home';

  return (
    <div className={`banner banner--${page}`}>
      {content && <h1>{content}</h1>}
    </div>
  );
};

export default Banner;