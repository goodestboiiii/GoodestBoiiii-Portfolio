import React from 'react';
import './Kilowhatt.css';
import kilowhatt from '../img/kilowhatt.png';


const Kilowhatt = () => {
  return (
    <section className="kilowhatt-section" id="kilowhatt">
      <div className="kilowhatt-container">
        <div className="main-img">
            <img src={kilowhatt} alt="Kilowhatt Project" className="project-img" />
        </div>
        <div className="title">Kilowhatt: Electric Utility Management Mobile Application for Renters and Homeowners</div>
        <div className="kilo-category">
            Overview
        </div>
        <div className="kilo-description">
            Description
        </div>
    </div>
    </section>

    );
};

export default Kilowhatt;
