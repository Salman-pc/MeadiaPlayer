import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi, savehistoryApi } from '../services/allApi';

function VideoCard({displayData,setvideodeleteResponse,insideCatogory}) {
  const [show, setShow] = useState(false);
  // const [watchdata,setwatchdata]=useState({caption:"",youtubeUrl:"",dateandtime:""})

  const handleClose = () => setShow(false);

  const handleShow = async() => {

    // setwatchdata({caption:displayData.caption,youtubeUrl:displayData.})
    const {caption,youtubeUrl,imageurl}=displayData
    console.log(displayData,"imadissssss");
    
    const localtime= new Date()
    const formatingdetails=localtime.toLocaleString()
    const historyData={caption,youtubeUrl,formatingdetails,imageurl}
    try {
      const result= await savehistoryApi(historyData)
      console.log(result,"akjds");

    } catch (error) {

      console.log(error);
      
    }
    setShow(true);
  }
 
  const handledeleteVedio= async(videoId)=>{
    try {
      const result=await deleteVideoApi(videoId)
      setvideodeleteResponse(result.data)
      console.log(result.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  const videoDragstart=(e,videoId)=>{
    console.log("draged id ",videoId);
    e.dataTransfer.setData("videoid",videoId)
    console.log("data transferd",e);
    
  }

  return (
    <div className="d-flex justify-content-center mt-4">
    <Card style={{ width: "18rem" }} draggable={true} onDragStart={(e)=>videoDragstart(e,displayData?.id)}>
      <Card.Img
      className='object-fit-cover'
        onClick={handleShow}
        style={{height:"200px"}}
        variant="top"
        src={displayData?.imageurl}
        alt="Card Image"
      />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title className='fw-bold' style={{fontSize:"20px"}} >{displayData?.caption}</Card.Title>
        <div className="">
        
        {!insideCatogory &&<Button variant="danger"  onClick={()=>handledeleteVedio(displayData?.id)}>
             <i className="fa-solid fa-trash"></i>
          </Button>}
        </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:'300px'}}>
          <div  className='m-2 pb-3 h-100'>
            <iframe className=' w-100 h-100' src={`${displayData?.youtubeUrl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </Modal.Body>
        
    </Modal>

  </div>
  )
}

export default VideoCard
