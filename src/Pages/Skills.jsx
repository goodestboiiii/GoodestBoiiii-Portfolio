import React from 'react';
import './Skills.css';
import { ReactComponent as HTML } from '../img/bxl-html5.svg';
import {ReactComponent as CSS} from '../img/bxl-css3.svg';
import {ReactComponent as Fig} from '../img/bxl-figma.svg';
import {ReactComponent as ReactIcon} from '../img/bxl-react.svg';
import { ReactComponent as Python } from '../img/bxl-python.svg';
import {ReactComponent as JS} from '../img/bxl-javascript.svg';
import {ReactComponent as Git} from '../img/bxl-github.svg';
import {ReactComponent as MDB} from '../img/bxl-mongodb.svg';

const Skills = () => {
    return (
        <section className='skills-section' id='skills'>
        <div className="skills-container">
            <div className="skills-title">
            <h1>Skills</h1>
            <hr className="divider" />


            </div>
            <div className="skills-boxes">
                <div className="skill-box">
                    <h2>UI / UX Designer</h2>
                    <p>I am a creative <span className='highlighted-text'>UI/UX designer</span> with a passion for crafting intuitive and visually appealing user experiences. I focus on user-centered design, ensuring seamless interaction and satisfaction across digital platforms.</p>
                </div>


                <div className="skill-box">
                    <h2>Web Developer</h2>
                    <p>As a <span className='highlighted-text'>web developer,</span> with experience in building dynamic, responsive websites. I am proficient in modern web technologies, ensuring clean code and seamless functionality across devices and platforms.</p>
                </div>


                <div className="skill-box">
                    <h2>Mobile App Developer</h2>
                    <p>I am a skilled <span className='highlighted-text'>mobile app developer.</span> I specialize in building responsive, user-friendly applications for iOS and Android. I leverage the latest technologies to create apps that provide smooth and efficient functionality.</p>
                </div>
            </div>
        {/* Skill Icon Section*/}
            <div className="skills-icons">
                <div className="icon">
                    <JS className='icon-svg'/>
                    <p>JavaScript</p>
                </div>

                <div className="icon">
                    <HTML className='icon-svg'/>
                    <p>HTML</p>
                </div>

                <div className="icon">
                    <CSS className='icon-svg'/>
                    <p>CSS</p>
                </div>

                <div className="icon">
                    <Python className='icon-svg'/>
                    <p>Python</p>
                </div>

                <div className="icon">
                    <ReactIcon className='icon-svg'/>
                    <p>React JS</p>
                </div>

                <div className="icon">
                    <MDB className='icon-svg'/>
                    <p>MongoDB</p>
                </div>

                <div className="icon">
                    <Fig className='icon-svg'/>
                    <p>Figma</p>
                </div>

                <div className="icon">
                    <Git className='icon-svg'/>
                    <p>GitHub</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Skills;
