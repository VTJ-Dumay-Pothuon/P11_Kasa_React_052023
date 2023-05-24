import React from 'react';
import '../styles/NotFound.scss';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const NotFound = () => {
    // if url is not /404, redirect to /404
    if (window.location.pathname !== "/404") {
        window.location.href = "/404";
    }
    return (
        <React.Fragment>
        <Header />
        <div className="not-found">
            <h1>404</h1>
            <h2>Oups ! la page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        </React.Fragment>
    )
}

export default NotFound;