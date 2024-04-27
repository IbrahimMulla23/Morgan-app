import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <Container fluid className="bg-dark text-light mt-5 pt-4 last-section">
            <Row className="d-flex">
                <Col lg={9} className="pb-4">
                    <h5>©Copyright All Rights Reserved</h5>
                </Col>
                <Col lg={3} className="ps-5">
                    <h5>This site by Ibrahim Mulla</h5>
                </Col>
            </Row>
        </Container>
    )
}


export default Footer;
