import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import './Projects.css';
import { FaChevronRight } from "react-icons/fa";
import kilowhatt from '../img/kilowhatt.png';
import proj3 from '../img/project3.png';



const Projects = () => {



  useEffect(() => {
    const images = document.querySelectorAll(".project-img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.4 }
    );

    images.forEach(img => observer.observe(img));
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Title */}
        <div className="project-title">
          <h1>Projects</h1>
          <hr className="divider" />
        </div>

        <div className="projects-top">


          <div className="project-card">

            <a href="https://www.canva.com/design/DAG2oe_1Los/QY5HZnstNK0z1RRmhEjVpQ/edit"
              target="_blank" rel="noreferrer">
              <img src={kilowhatt} alt="Kilowhatt Project" className="project-img" />
            </a>

            <div className="project-info">
              <div className="project-tags">
                <span>Mobile Development • 2025</span>
              </div>
              <div className="project-card-title">Kilowhatt</div>

              <div className="project-description">
                <p>
                  Kilowhatt is a role-based mobile application designed
                  for homeowners and tenants to simplify electricity management
                  through OCR submeter scanning, automated bill tracking,
                  smart notifications, and integrated payment options.
                  The technology stack used is Flutter, Firebase, and Supabase.
                </p>
              </div>
              <div className="project-link">
                <Link to="/kilowhatt" className="case-study-btn">
                  Case Study <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>


          <div className="project-card">

            
              <img src={proj3} alt="Techlympics" className="project-img" />
            
            <div className="project-info">
              <div className="project-tags">
                <span>UI/UX Design • 2024</span>

              </div>
              <div className="project-card-title">Techlympics Website</div>

              <div className="project-description">
                <p>
                  The Techlympics Booking Website is a UI/UX competition project that earned first place,
                  featuring a complete event list,
                  category filters, an interactive calendar, and a ticketing system
                  with a built-in barcode generator for seamless event access. This project was designed using Figma.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
