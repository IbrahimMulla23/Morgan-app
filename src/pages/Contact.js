import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

function Contact() {
    return (
        <>
            <div>
                <div className="aboutbgimg"></div>
                <h1 className="abouttext"><bold>CONTACT</bold></h1>
            </div>

            <Container>
                <Row>
                    <Col lg={5}>
                        <div className='enquiry-form mt-4 me-5'>
                            <h2>Get In Touch</h2>
                            <form action='#' method='post'>
                                <input type="text" name="name" placeholder="Full Name" className='rounded px-2 shadow mb-2' required />
                                <input type="email" name="email" placeholder="Email" className='rounded px-2 shadow mb-2' required />
                                <input type="tel" name="phone" placeholder="Mobile Number" className='rounded px-2 shadow mb-2' required />
                                <textarea name="message" placeholder="Message" className='rounded px-2 shadow mb-2' required></textarea>
                            </form>
                            <Button className='btn mb-5' variant="outline-warning  ">submit</Button>{' '}
                        </div>
                    </Col>


                    <Col lg={7} className='mt-4 ps-5 our-info'>
                        <h2 >Our Address</h2>
                        <p>2130 Fulton Street, San Diego, USA</p>
                        <p>1-800-1234-567</p>
                        <p>info@demolink.org</p>
                        <iframe height={350} width={350} title='map' className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.899608597789!2d72.8310554!3d18.9656724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1712155173082!5m2!1sen!2sin" />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact
