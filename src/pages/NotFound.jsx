import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../styles/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => {
  const history = useHistory();
  const currentPath = window.location.pathname;

  // deploymentPath is null if url is localhost, otherwise it is the name of the repository
  const deploymentPath = process.env.PUBLIC_URL;

  if (currentPath !== `${deploymentPath}/notfound`) {
    history.push(`${deploymentPath}/notfound`);
  }

  return (
    <React.Fragment>
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to={`${deploymentPath}/`}>Retourner sur la page d'accueil</Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;