import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import img1 from '../Assest/portrait-1.jpg';
import img2 from '../Assest/portrait-2.jpg';
import img3 from '../Assest/portrait-3.jpg';
import img4 from '../Assest/portrait-4.jpg';
import img5 from '../Assest/portrait-5.jpg';

function Service() {
  return (
    <>
      <div>
        <div className="aboutbgimg"></div>
        <h1 className="abouttext"><bold>SERVICE</bold></h1>
      </div>

      <Container className="mb-5 mt-3">
        <Row>
          <Col lg={6}>
            <img src={img1} alt="portrait-1" className="img-fluid rounded shadow" />
          </Col>
          <Col lg={6}>
            <h1>Service Description</h1>
            <p className="fs-5 text-secondary">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
            <Button className='btn rounded hillo' variant="outline-warning">Learn More</Button>{' '}
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 mt-3">
        <Row>
          <Col lg={6}>
            <img src={img2} alt="portrait-2" className="img-fluid rounded shadow" />

          </Col>
          <Col lg={6}>
            <img src={img3} alt="portrait3" className="img-fluid mt-2 rounded shadow" />
            <h2 className="oil text-warning">Oil on Canvas of a Little Girl</h2>
            <p className="text-secondary oil-2 ps-3">This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 mt-3">
        <Row>
          <Col lg={6}>
            <img src={img4} alt="portrait4" className="img-fluid rounded shadow" />
            <h2 className="oil text-warning">Oil on Canvas of a Little Girl</h2>
            <p className="text-secondary oil-2 ps-3">This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
          </Col>
          <Col lg={6}>
            <img src={img5} alt="portrait5" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Service
