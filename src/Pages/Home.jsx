import React from 'react';
import './Home.css';
import jeanImage from '../img/jean.jpg'; 

const Home = () => {
  return (
    <section className="home-section" id='home'>
      <div className='home-title'> 
      <h1>Home</h1>
      <hr className="divider" />
      </div> 
      <div className="home-container">
        {/* Image Section */}
        <div className="home-image">
          <img src={jeanImage} alt="Jean" className="profile-img" />
        </div>

        {/* Text Section */}
        <div className="home-description">
          <h2>Jeanzey Clye Romano</h2>
          <p className="roles">UI / UX Designer | Web Developer | Mobile App Developer</p>
          <p className='a-description'>

            Student designer & developer who enjoys turning ideas into clean designs and working apps. 
            Currently building UI/UX projects, websites, and mobile apps—and looking for an internship 
            where I can grow and contribute.
          </p>
          <div className="home-buttons">
            <button className="btn btn-projects"><a href='https://drive.google.com/file/d/1iVGpiKUCWkkiYB7rfU46ngBuWoBGin_z/view?usp=sharing' target='_blank'>Resume</a></button>
            <button className="btn btn-contact"><a href='#contact'>Get in touch!</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
