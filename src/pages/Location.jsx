import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Location.scss';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';

import data from '../assets/data/database_mock.json';

const Location = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredLocation = data.filter((location) => location.id === id);

    if (filteredLocation.length) {
      setLocation(filteredLocation[0]);
      setIsLoading(false);
    } else {
      navigate('/notfound');
    }
  }, [id, navigate]);

  return (
    <React.Fragment>
      <Header />
      {!isLoading && location && (
        <React.Fragment>
          <div className="location">
            <section className="location__carousel">
              <Carousel images={location.pictures} />
            </section>
            <section className="location__header">
              <h1>{location.title}</h1>
              <h2>{location.location}</h2>
              <div className="location__header__infos">
                <div className="location__header__infos__tags">
                  {location.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>
                <div className="location__header__infos__right">
                  <Rating rating={location.rating} />
                  <Host host={location.host} />
                </div>
              </div>
            </section>
            <section className="location__content">
              <Dropdown title="Description" content={location.description} />
              <Dropdown
                title="Équipements"
                content={
                  <ul>
                    {location.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </section>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Location;