import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi, savehistoryApi } from '../services/allApi';

function VideoCard({ displayData, setvideodeleteResponse, insideCatogory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    const { caption, youtubeUrl, imageurl } = displayData;
    const localtime = new Date();
    const formatingdetails = localtime.toLocaleString();
    const historyData = { caption, youtubeUrl, formatingdetails, imageurl };

    try {
      const result = await savehistoryApi(historyData);
      console.log(result, "Saved to history");
    } catch (error) {
      console.log(error);
    }

    setShow(true);
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      const result = await deleteVideoApi(videoId);
      setvideodeleteResponse(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Enable scrolling during drag
  const videoDragStart = (e, videoId) => {
    console.log("Dragged ID:", videoId);
    e.dataTransfer.setData("videoid", videoId);
    document.body.style.overflow = 'auto';  // Allow scrolling during drag
  };

  const videoDragEnd = () => {
    document.body.style.overflow = '';  // Reset scrolling after drag
  };

  return (
    <div className="d-flex  justify-content-center mt-4">
      <Card
        style={{
          width: "16rem",      
          maxWidth: "100%",        
          cursor: "grab",
          height: "310px"          
        }}
        draggable={true}
        onDragStart={(e) => videoDragStart(e, displayData?.id)}
        onDragEnd={videoDragEnd}
      >
        <div style={{ height: insideCatogory ? "235px" : "200px" }}>
          <Card.Img
            className="object-fit-cover"
            onClick={handleShow}
            style={{ height: insideCatogory ? "235px" : "200px" }}  
            variant="top"
            src={displayData?.imageurl}
            alt="Card Image"
          />
        </div>

        <Card.Body style={{ height: "20%" }}>
          <Card.Title className="fw-bold text-center" style={{ fontSize: "18px", textTransform: 'capitalize'  }}>
            {displayData?.caption}
          </Card.Title>
        </Card.Body>

        
        {!insideCatogory && ( <div style={{ height: "10%" }} className="mb-3 text-center">
          
            <Button variant="danger" onClick={() => handleDeleteVideo(displayData?.id)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          
        </div> )}
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '300px' }}>
          <div className='m-2 pb-3 h-100'>
            <iframe
              className='w-100 h-100'
              src={`${displayData?.youtubeUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
