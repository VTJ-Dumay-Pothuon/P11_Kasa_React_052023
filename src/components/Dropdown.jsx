import React, { useState } from "react";
import "../styles/Dropdown.scss";
import arrow from "../assets/images/arrow.svg";

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)}>
            {title}
            <img src={arrow} alt="arrow" className={isOpen ? "open" : ""} />
        </button>
        {isOpen && <div className="dropdown__content">{content}</div>}
        </div>
    );
    }

export default Dropdown;