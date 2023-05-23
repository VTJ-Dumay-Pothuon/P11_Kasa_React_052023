import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Card.scss";

const Card = ({ title = 'Titre de la location', cover, id = '0' }) => {
    return (
      <section className="card"/* onClick={(id) => <Link to={`/location/${id}`} />}*/>
            <img src={cover} alt={title} />
        <div className="card__overlay"></div>
        <h2>{title}</h2>
      </section>
    );
  };

export default Card;