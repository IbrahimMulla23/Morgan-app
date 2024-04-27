import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import project1 from '../Assest/project-1.jpg';
import project2 from '../Assest/project-2.jpg';
import project3 from '../Assest/project-3.jpg';
import project4 from '../Assest/project-4.jpg';
import project5 from '../Assest/project-5.jpg';
import project6 from '../Assest/project-6.jpg';

function Painting() {
    const [show, setShow] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const paintings = [
        {
            "image": project1,
            "title": "Sea Storm",
            "description": "This painting is one of my latest works on sea."
        },
        {
            "image": project2,
            "title": "Ruins of Ancient Fortress",
            "description": "When I have been to Scotland, I made this painting."
        },
        {
            "image": project3,
            "title": "Two Lovers",
            "description": "This work was finished in two days for my customer."
        },
        {
            "image": project4,
            "title": "Watercolor Portrait",
            "description": "Jane Williams, my friend and colleague, asked..."
        },
        {
            "image": project5,
            "title": "Birches in Autumn",
            "description": "I love painting autumn trees and this work is a..."
        },
        {
            "image": project6,
            "title": "Green Landscape",
            "description": "Another abstract work, which appeared at my..."
        }
    ];

    const handleClose = () => setShow(false);
    const handleShow = (postData) => {
        setSelectedPost(postData);
        setShow(true);
    };

    return (
        <Container>
            <Row>
                {paintings.map((item, index) => (
                    <Col lg={4} key={index}>
                        <Card style={{ width: '22rem' }} className='mt-3 all-card'>
                            <Card.Img variant="top" src={item.image} height='300px' className='' />
                            <Card.Body>
                                <Card.Title className='fs-3 text-warning'>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="outline-warning" onClick={() => handleShow(item)}>Show More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedPost ? selectedPost.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedPost ? selectedPost.image : ''} alt="Selected Post" />
                    <p>{selectedPost ? selectedPost.description : ''}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Painting;