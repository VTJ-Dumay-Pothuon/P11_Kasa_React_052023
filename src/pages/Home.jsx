import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

// We import the json file in kasa/data/database_mock.json
import data from '../assets/data/database_mock.json';
// for each entry in data, we create a card, with the title, the cover and the id as props

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
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
