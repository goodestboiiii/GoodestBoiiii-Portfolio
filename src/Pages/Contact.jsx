import React from 'react';
import './Contact.css';
import ContactImg from '../img/contact.png'; 
import { ReactComponent as Email } from '../img/bx-envelope.svg';
import {ReactComponent as Git} from '../img/bxl-github.svg';
import { ReactComponent as FB } from '../img/bxl-facebook.svg';
import { ReactComponent as Link } from '../img/bxl-linkedin.svg';

const Contact = () => {
  return (
    <section className="contact-section" id='contact'>
      <div className='contact-title'> 
      <h1>Contact Me</h1>
      <hr className="divider" />
      </div> 
      <div className="contact-container">
        {/* Image Section */}
        <div className="contact-image">
          <img src={ContactImg} alt="Contact" className="con-img" />
        </div>

        {/* Text Section */}
        <div className="contact-text">
          <h2 className="contact-label">
            Ready to take your project to <span className="highlighted-text">the next level</span>? Let’s talk!
          </h2>
          <ul className="contact-social">
            <li className="social-item">
              <Email/>
              <p>jeanzey.romano@gmail.com</p>
            </li>
            <li className="social-item">
              <Git/>
              <p><a href="https://github.com/goodestboiiii" target="_blank">goodestboiiii</a></p>
            </li>
            <li className="social-item">
              <FB/>
              <p><a href="https://www.facebook.com/profile.php?id=100083128791603&mibextid=JRoKGi" target="_blank">Jeanzey Clye Romano</a></p>
            </li>
            <li className="social-item">
              <Link/>
              <p><a href ="https://www.linkedin.com/in/jeanzey-clye-romano-233505252/" target="_blank">Jeanzey Clye Romano</a></p>
            </li>
          </ul>
        </div>
      </div>

            {/* Footer Section */}
            <footer className="footer">
        <div className="footer-container">
          <p>© 2025 Copyright | Jeanzey Clye Romano</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
