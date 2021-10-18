import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Aboutus from "../../../Images/AboutUs/AboutUs.jpg";
import "./AboutUs.css";

const AboutUs = () => {
    return (
           
           <Row className="align-items-center">
           <div className="section-heading">
           <h2>About <span>Us</span></h2>
           <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
            </div>
                <Col md={6} sm={6} xs={12}>
                    <img className="w-100" src={Aboutus} alt="" />
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div className="about-us-detail">
                        <h1>Short Story About HealthLab Care Since 2007</h1>
                        <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                        <ul>
                            <li><i class="far fa-check-circle"></i>Scientific Skills For getting a better result</li>
                            <li><i class="far fa-check-circle"></i>Communication Skills to getting in touch</li>
                            <li><i class="far fa-check-circle"></i>A Career Overview opportunity Available</li>
                            <li><i class="far fa-check-circle"></i>A good Work Environment For work</li>
                        </ul>
                        <button className="moreInfo-btn">Learn More <i class="far fa-arrow-alt-circle-right"></i></button>
                    </div>
                </Col>
           </Row>

    );
};

export default AboutUs;