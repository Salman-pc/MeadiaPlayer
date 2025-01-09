import React from 'react'
import Card from 'react-bootstrap/Card';
import settings from '../assets/landing imgs/settings.jpg'
import Categorize from '../assets/landing imgs/Categorize.jpeg'
import Historyimg from '../assets/landing imgs/Historyimg.jpeg'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
            {/* First part */}
            <div className="col-md-6">
            <h2>Welcome to Media Player</h2>
            <p className='text-white text-justify'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                repudiandae? Quam assumenda esse voluptatem fugiat! Odit placeat
                molestiae debitis unde tempora, ullam laboriosam quos quia, fugiat
                facilis aspernatur. Ab tenetur possimus veniam! Voluptate voluptatibus
                vero neque ab. Repudiandae, ullam vel.
            </p>
            <Link to='/home'>
                <button className="btn btn-info">Get Started</button>
            </Link>
            </div>
            {/* Second part */}
            <div className="col-md-6 justify-content-center d-flex">
            <img className='w-75' src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3_w200.webp"></img>
            </div>
        </div>
        <div className='d-flex justify-content-evenly'>
            
            <Card style={{ width: '18rem',color:"white" }}>
                <Card.Img style={{height:"250px"}} variant="top" src={Categorize} />
                <Card.Body>
                    <Card.Title className='text-center'>Categorize Videos</Card.Title>
                    <Card.Text>
                    Users can Categorize the video by drag and drop feature.
                    </Card.Text> 
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem',color:"white"  }}>
                <Card.Img style={{height:"250px"}} variant="top" src={settings} />
                <Card.Body>
                    <Card.Title className='text-center'>Managing Videos</Card.Title>
                    <Card.Text >
                        Users can upload,view and remove the videos.
                    </Card.Text> 
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem',color:"white" }}>
                <Card.Img style={{height:"250px"}} variant="top" src={Historyimg} />
                <Card.Body>
                    <Card.Title className='text-center'>Managing History</Card.Title>
                    <Card.Text>
                        Users can manage the watch history of all video.
                    </Card.Text> 
                </Card.Body>
            </Card>
        </div>
        <div className="row my-5 p-5 border">
        {/* First part */}
            <div className="col-lg-6">
            <h3>Simple Fast and Powerful</h3>
            <p className='text-white'>
                <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Dolores quos accusamus in a, ea aliquam quibusdam maiores
                tenetur voluptas dolorem! Ad voluptatum impedit cum omnis cumque nostrum mollitia fuga
                ex.
            </p>
            <p className='text-white'>
                <span className='fs-5'>Categorize Video:</span> Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Pariatur quam itaque odio iusto earum vero saepe aperiam
                exercitationem, quia at tempore explicabo voluptates, voluptate placeat obcaecati
                molestias optio! Commodi, maxime!
            </p>
            <p className='text-white'>
                <span className='fs-5' >Manage History:</span> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsa ex incidunt, asperiores dicta cupiditate enim
                eligendi accusamus voluptas qui nulla voluptatum, beatae impedit deserunt. Nesciunt
                nostrum ex commodi iusto aliquam!
            </p>
            </div>
            {/* Second part */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
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
  )
}

export default Landing
