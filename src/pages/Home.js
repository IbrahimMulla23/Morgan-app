import React from "react";
import bg from '../Assest/brand-inverse.png';
import side from '../Assest/home.jpg';
import Button from 'react-bootstrap/Button';
import Painting from "../Component/Painting";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from '../Assest/user.png';
import leaf from '../Assest/leaf.png';
import apple from '../Assest/apple-logo.png';
import house from '../Assest/house.png';

function Home() {
    return (
        <>
            <div className="morgan-bg-img">
                <img src={bg} alt="bg-img" className="morgan-fame" />
            </div>

            <section className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 paraone">
                        <h1>A Few Words About Us</h1>
                        <p className=" text-secondary">My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                        <Button className="btn rounded" variant="outline-warning">Learn More</Button>{' '}
                    </div>

                    <div className="col-lg-6 ">
                        <img src={side} className="rounded side-img" alt="side-img" />
                    </div>
                </div>
            </section>

            <Painting />


            <Container className="mt-4 ">
                <Row className="" >
                    <h1 className='fw-bold text-center service-ttle'>Service</h1>
                    <p className='text-secondary mb-3 text-center fs-5 service-msg'>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
                  
                    <Col lg={3} className="all-box">
                  <div className="box rounded shadow">
                        <img className='boxes' src={user} alt="" />
                        <h3 className='text-center'>Portrait</h3>
                  </div>
                    </Col>

                    <Col lg={3} className="all-box">
                  <div className="box rounded shadow">

                        <img className='boxes' src={leaf} alt="" />
                        <h3 className='text-center'>Landscape</h3>
                  </div>
                    </Col>


                    <Col lg={3} className="all-box">
                 <div className="box rounded shadow">

                        <img className='boxes' src={apple} alt="" />
                        <h3 className='text-center'>Still Life</h3>

                 </div>
                    </Col>

                    <Col lg={3} className="all-box">
                        <div className="box rounded shadow">

                        <img className='boxes' src={house} alt="" />
                        <h3 className='text-center'>Urban</h3>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Button className='btn mb-5 mt-5 servicebtn' variant="outline-warning ">View All Service</Button>{' '}


        </>
    )
}

export default Home;