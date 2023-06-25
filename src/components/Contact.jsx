import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Submit')
    const [status, setStatus] = useState({})
    
    const onFormUpdate = (field, value) => {
        setFormDetails({...formDetails, [field]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText('Send')
        let result = response.json()
        setFormDetails(formInitialDetails)

        if (result.code === 200) {
            setStatus({ success: true, type: 'success', message: 'Message Sent!' })
        } else {
            setStatus({ success: false, type: 'error', message: 'Message failed to send' })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='aling-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="">
                            <Col sm={6} className='px-1'>
                                <input type="text" placeholder='First Name' value={formDetails.firstName} onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" placeholder='Last Name' value={formDetails.lastName}  onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" placeholder='Email' value={formDetails.email} onChange={(e)=>onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" placeholder='Phone' value={formDetails.phone}  onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm={12} className='px-1'>
                                <textarea name="message" cols="30" rows="10" placeholder='Message' value={formDetails.message} onChange={(e)=>onFormUpdate('message', e.target.value)}></textarea>
                            </Col>
                            <Col sm={12} className='px-1'>
                                <button type='submit'>{buttonText}</button>
                            </Col>
                            <Col>
                                {status.message && <p className={`alert ${status.type}`}>{status.message}</p>}
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;