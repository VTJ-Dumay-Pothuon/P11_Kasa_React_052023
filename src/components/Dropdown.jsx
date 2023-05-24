import React, { useState } from "react";
import "../styles/Dropdown.scss";
import arrow from "../assets/images/arrow.svg";

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const classTitle = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return (
        <div className={`dropdown dropdown--${classTitle}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
            {title}
            <img src={arrow} alt="arrow" className={isOpen ? "open" : ""} />
        </button>
        {isOpen && <div className="dropdown__content">{content}</div>}
        </div>
    );
    }

export default Dropdown;