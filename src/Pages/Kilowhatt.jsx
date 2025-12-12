import React from 'react';
import { Link } from "react-router-dom";
import './Kilowhatt.css';
import kilowhatt from '../img/kilowhatt.png';
import renterWf from '../img/renter-wireframe.png'
import homeownerWf from '../img/homeowner-wireframe.png'
import { FaChevronLeft} from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa';


const Kilowhatt = () => {
  return (
    <section className="kilowhatt-section" id="kilowhatt">
      <div className="kilowhatt-container">
        <div><Link to="/projects" className="back-btn"><FaChevronLeft/> Back</Link></div>
        <div className="main-img">
            <img src={kilowhatt} alt="Kilowhatt Project" className="cover-img" />
        </div>
        <div className="title"><h1>Kilowhatt: Electric Utility Management Mobile Application for Renters and Homeowners</h1></div>
        <div className="kilo-category">
            <h3>Project Overview</h3>
        </div>
        <div className="kilo-description">
            <p>Kilowhatt is a utility-management mobile application designed to simplify electricity bill calculation 
            for tenants, homeowners, and landlords. The goal was to provide a fast, accurate, and user-friendly 
            way to compute bills based on submeter readings—addressing a common pain point in shared living spaces.</p>
        </div>
        <div className="kilo-category">
            <h3>The Problem</h3>
        </div>
        <div className="kilo-description">
            <p>Many households rely on submeters to measure electricity consumption individually, but manually 
            computing monthly bills is often error-prone, inconsistent, and time-consuming. Users struggle 
            with tracking previous readings, validating meter photos, and performing accurate calculations.</p>
        </div>
        <div className="kilo-category">
            <h3>The Solution</h3>
        </div>
        <div className="kilo-description">
            <p>
            To solve the issues around billing accuracy, transparency, and trust between homeowners and renters, we built a streamlined energy-management system within Kilowhatt. The focus was on ease of use, reliable data, and secure transactions.
            </p>

                <ul>
                    <li><span>Automated Bill Calculation</span> using optical character recognition (OCR/ML Kit) 
                        to scan electric meter readings and generate precise computations.</li>
                    <li><span>Homeowner–Renter Shared Dashboard</span> that displays monthly bills, payment status, 
                        consumption insights, and historical records.</li>
                    <li><span>Renter Summary and Bill Breakdown</span>, enabling renters to verify calculations 
                    through an expandable bill details interface.</li>
                    <li><span>Integrated Notifications System</span> that alerts renters when a new bill is
                     posted and provides direct navigation to the full breakdown.</li>
                    <li><span>Export and Save as Image functionality</span> so users can store verified
                     billing information for documentation.</li>
                     <li><span>Boarding House Information for Transparency</span>, wherein the renters can view the name, 
                        description, photos of the boarding house, additional property images, and a 
                        geo-location pin with navigation showing the exact route to the boarding house</li>
                     <li><span>Multiple Payment Options + MetaMask Integration:</span> The app supported various payment 
                     channels, including a blockchain option via MetaMask. This provided secure, verifiable payments with 
                     an immutable transaction history.</li>
                     <li><span>Clear and Intuitive UI/UX: </span> As both UI/UX designer and developer, I focused 
                     on clean layouts, familiar interaction patterns, and simple workflows to make the experience 
                     accessible for all users.</li>
                </ul>
        </div>
        <div className="kilo-category">
            <h3>Role and Responsibilities</h3>
        </div>
        <div className="kilo-description">
            <p>In addition to leading the team, I designed the interface to feel approachable and familiar to non-technical users. I focused on: </p>
                <ul>
                    <li>A minimal and functional layout that places reading options at the center.</li>
                    <li>Clear visual hierarchy to guide users through each step.</li>
                    <li>Consistency in interaction patterns, ensuring predictable user flows.</li>
                    <li>Error prevention through validations, feedback messages, and automated data handling.</li>
                </ul>
            <p>On the development side, I implemented the primary UI screens and interactions, set up the routing and navigation logic, and collaborated with the developer handling OCR and computation logic.</p>
            
        </div>

        <div className="kilo-category">
            <h3>The Outcome</h3>
        </div>
        <div className="kilo-description">
            <p>The enhanced version of Kilowhatt delivered measurable improvements in clarity, trust, and 
                operational efficiency for both homeowners and renters. By combining automated billing, 
                transparent property information, and secure payment methods, the application provided a 
                significantly more reliable and user-centered experience. </p>
        </div>
        <div className="kilo-category">
            <h3>The Wireframe</h3>
        </div>
        <div className="wireframe">
            <img src={renterWf} alt="Renter Wireframe" className="renter"></img>
            <img src={homeownerWf} alt="Homeowner Wireframe" className="homeowner"></img>
        </div>
        <div className="top"><a href="#kilowhatt"> Back to Top <FaArrowUp/></a></div>
    </div>
    </section>

    );
};

export default Kilowhatt;
