import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
