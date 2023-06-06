import React, { useState, useEffect } from "react";
import "../styles/Carousel.scss";
import arrow from "../assets/images/arrow.svg";
import pauseCursor from "../assets/images/pause.svg";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTimerPaused, setIsTimerPaused] = useState(false);

    useEffect(() => {
        /// disable if images.length === 1
        if (images.length === 1) { return }
        if (!isTimerPaused) {
            const timer = setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
            }, 5000); // 5 seconds loop
            // when the component unmounts, clear the timer
            return () => clearTimeout(timer);
        }
    }, [currentImageIndex, images.length, isTimerPaused]);

    const previousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="carousel" style={{cursor: `url(${isTimerPaused ? pauseCursor : null}), auto`}}>
            <div className="carousel__image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                onClick={() => setIsTimerPaused(!isTimerPaused)}>
            </div>
            <div className="carousel__buttons" style={{ display: images.length === 1 ? "none" : "flex" }}>
                <button className="carousel__buttons__previous" onClick={previousImage} disabled={images.length === 1}>
                    <img src={arrow} alt="précédent" className="previous" />
                </button>
                <div className="middlefield" onClick={() => setIsTimerPaused(!isTimerPaused)} />
                <button className="carousel__buttons__next" onClick={nextImage} disabled={images.length === 1}>
                    <img src={arrow} alt="suivant" className="next" />
                </button>
            </div>

            <div className="carousel__index" style={{ display: images.length === 1 ? "none" : "block" }}>
            <span className="carousel__index__mobile">
                {images.map((_, index) => (
                    <span key={index} className={index === currentImageIndex ? "active" : ""}
                    onClick={() => setCurrentImageIndex(index)}>•</span>
                ))}
            </span>
            <span className="carousel__index__desktop">{`${currentImageIndex + 1}/${images.length}`}</span>
            </div>
        </div>
    );
}

export default Carousel;