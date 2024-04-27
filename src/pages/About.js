import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import life from '../Assest/still-life-1.jpg';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <>
      <div className="aboutbgimg"></div>
      <h1 className="abouttext"><bold>ABOUT</bold></h1>
      <Container>
        <Row className="mt-4">
          <Col lg={6}>
            <h2 className="">A Few Words About Us</h2>
            <p className="fs-5 text-secondary">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</p>
            <Button className='btn rounded hillo' variant="outline-warning">Learn More</Button>{' '}
          </Col>
          <Col lg={6}>
            <img src={life} className="rounded still-img shadow" alt="life-img" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default About;



