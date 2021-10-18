import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
       <Container id="service" className='text-center'>
            <div className="section-heading">
                <h2>Special Service For <span>Patients</span></h2>
                <p>We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy</p>
            </div>
           <Row>
            {
                services.slice(0,6).map(service => <Service key={service.id} service={service}></Service>)
            }
           </Row>
           <button className="moreInfo-btn"> More Services <i class="far fa-arrow-alt-circle-right"></i></button>
       </Container>
    );
};

export default Services;