import 'aos/dist/aos.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurConcern.css';

const OurConcern = () => {
    return (
        <section>
            <Container className="ceo-container">
                <Row className="align-items-center">
                    <Col md={6} sm={12} xs={12}>
                        <div className="ceo-image">
                            <img className='w-100' src="https://i.ibb.co/K0jD5Mj/01.png" alt="" />
                        </div>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <div className="ceo-content">
                            <h1>Your <span>Health</span> is Our Concern</h1>
                            <h4>With occupancy rates at near capacity and an increasing number of complex patients,</h4>
                            <p>With occupancy rates at near capacity and an increasing number of complex patients, our existing facilities are being enhanced and new facilities created to meet .</p>
                            <img src="https://i.ibb.co/DRHjbrg/sign.png" alt="" />
                            <div className="ceo-name">
                            <h3>Roger Health</h3>
                            <span>CEO, Founder</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurConcern;