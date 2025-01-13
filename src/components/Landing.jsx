import React from 'react';
import Card from 'react-bootstrap/Card';
import settings from '../assets/landing imgs/settings.jpg';
import Categorize from '../assets/landing imgs/Categorize.jpeg';
import Historyimg from '../assets/landing imgs/Historyimg.jpeg';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-6">
                        <h1 className='fw-bold text-info'>Welcome To Media Player</h1>
                        <p className='text-white text-justify pt-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                            repudiandae? Quam assumenda esse voluptatem fugiat! Odit placeat
                            molestiae debitis unde tempora, ullam laboriosam quos quia, fugiat
                            facilis aspernatur. Ab tenetur possimus veniam! Voluptate voluptatibus
                            vero neque ab. Repudiandae, ullam vel.
                        </p>
                        <Link to='/home'>
                            <button className="btn fw-bold btn-info px-4 py-2 shadow-lg">Get Started</button>
                        </Link>
                    </div>
                    <div className="col-md-6 mt-5 justify-content-center d-flex">
                        <img className='w-75' src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.webp" alt="Media Player Animation" />
                    </div>
                </div>

                <div className="row my-5 g-4">
                    <div className="col-12 col-sm-4 d-flex justify-content-center">
                        <Link to='/home' className="text-decoration-none">
                            <Card style={{ maxWidth: '18rem', color: "white" }} className="text-center shadow-sm hover-shadow">
                                <Card.Img variant="top" src={Categorize} alt="Categorize Videos Feature" className="img-fluid" style={{ height: "250px" }} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"20px"}}>Categorize Videos</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>Users can categorize videos using drag-&-drop.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-4 d-flex justify-content-center gap-sm-4 gap-2">
                        <Link to='/home' className="text-decoration-none">
                            <Card style={{maxWidth: '18rem', color: "white" }} className="text-center shadow-sm hover-shadow">
                                <Card.Img variant="top" src={settings} alt="Manage Videos Feature" className="img-fluid" style={{ height: "250px" }} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"20px"}}>Managing Videos</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}}>Users can upload, view, and remove videos.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className="col-12 col-sm-4 d-flex justify-content-center">
                        <Link to='/history' className="text-decoration-none">
                            <Card style={{ maxWidth: '18rem', color: "white" }} className="text-center shadow-sm hover-shadow">
                                <Card.Img variant="top" src={Historyimg} alt="Manage Watch History Feature" className="img-fluid" style={{ height: "250px" }} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:"20px"}}>Managing History</Card.Title>
                                    <Card.Text style={{fontSize:"14px"}} >Users can manage watch history of videos.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>


                <div className="row my-5 p-5">
                    <div className="col-lg-6">
                        <h3>Simple Fast and Powerful</h3>
                        <p className='text-white'>
                            <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos accusamus in a, ea aliquam quibusdam maiores tenetur voluptas dolorem!
                        </p>
                        <p className='text-white'>
                            <span className='fs-5'>Categorize Video:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam itaque odio iusto earum vero saepe aperiam exercitationem.
                        </p>
                        <p className='text-white'>
                            <span className='fs-5'>Manage History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex incidunt, asperiores dicta cupiditate enim eligendi accusamus voluptas qui nulla voluptatum.
                        </p>
                    </div>
                    <div className="col-lg-6 d-flex border align-items-center justify-content-center">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/tOM-nWPcR4U?si=Bwdw4PFaYHRkOO0Q"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
