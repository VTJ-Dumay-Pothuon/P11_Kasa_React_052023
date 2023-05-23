import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Banner from '../components/Banner';

import data from '../assets/data/database_mock.json';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner content="Chez vous, partout et ailleurs" />
      <div className="cards">
        {data.map((location) => (
          <Card title={location.title} cover={location.cover} id={location.id} />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
