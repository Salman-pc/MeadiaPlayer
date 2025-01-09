import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { addVideoApi } from '../services/allApi';


function Add({setaddvideoResponse}) {

    const [videoDetails,setVedioDetails]=useState({caption:"",imageurl:"",youtubeUrl:""})
    const [show, setShow] = useState(false);
    const [isinvalidurl,setInvalidurl]=useState(false)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbededurl=(link)=>{
      if (link.includes("v=")) {
        setInvalidurl(false)
        const videoId=link.split("v=")[1].slice(0,11)
        setVedioDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
        console.log(videoId);  
      } 
      else if(link==""){
        setInvalidurl(false)
      }
      else {
        setVedioDetails({...videoDetails,youtubeUrl:""})
        setInvalidurl(true)
      } 
    }
    const handleUpload= async()=>{
      const {caption,imageurl,youtubeUrl}=videoDetails
      if (caption && imageurl && youtubeUrl) {
        try {
          const result = await addVideoApi(videoDetails)
          console.log(result);
          if(result.status>=200&&result.status<300){
            setaddvideoResponse(result.data)
            toast.success(`${result.data.caption} added  to your collection`)
            handleClose()
          }
          else{
            toast.warning(result.response.data)
          }   
        } catch (error) {
          console.log(error);     
        }
      }
      else{
        toast.warning("please enter the form completly")
      }
    }
  return (
    <div>
      <div className="d-flex align-items-center h-auto">
        <h3 className="text-decoration-none fw-bold  text-white fs-5 sm:fs-4 me-3">  
            UPLOAD NEW VIDEO
        </h3>
        <button
            onClick={handleShow}
            className="btn btn-info mb-2 rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "38px",
              fontSize:"25px",
              height: "38px",      
            }}
        >
            +
        </button>          
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title  className='fw-bold'>Video Details !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following fields</p>
            <FloatingLabel
                controlId="caption"
                label="Video Caption"
                className="mb-3"
            >
              <Form.Control onChange={(e)=>setVedioDetails({...videoDetails,caption:e.target.value})} type="text"  placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel controlId="url" label="Image Url">
                <Form.Control onChange={(e)=>setVedioDetails({...videoDetails,imageurl:e.target.value})} type="text" placeholder="Image url" />
            </FloatingLabel>

            <FloatingLabel
                controlId="url"
                label="Youtube url"
                className="mt-3"
            >
                <Form.Control onChange={(e)=>getEmbededurl(e.target.value)} type="text" placeholder="Youtube url" />
            </FloatingLabel>
            {isinvalidurl&&<p className='text-danger mt-2'>Invalid youtube url</p>}
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
       
    </div>
  )
}

export default Add
