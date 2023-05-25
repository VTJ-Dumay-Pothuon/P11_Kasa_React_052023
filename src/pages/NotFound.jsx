import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/notfound');
  }, [navigate]);

  return (
    <React.Fragment>
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;