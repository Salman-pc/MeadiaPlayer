import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCatogoryApi, deletecatogoryApi, deleteVideoApi, getCatogoryApi, getsinglevideoApi, updateCatogoryApi } from '../services/allApi';
import VideoCard from './VideoCard';

function Category({setDeletevideoresponse,updateCatogoryresponse}) {

  const [show, setShow] = useState(false);
  const [allCatogory,setallCatogory]=useState([])
  const [Categorydata,setcategorydata]=useState("")
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    
  getallcatogory()
    
  }, [updateCatogoryresponse])
  
  const getallcatogory=async()=>{
    try {
      const result= await getCatogoryApi()
      setallCatogory(result.data)
      console.log("get ",result.data);

    } catch (error) {
      console.log(error);
      
    }
  }

  const deleteCatogory=async(catogoryId)=>{
   const result= await deletecatogoryApi(catogoryId)
   getallcatogory()
  }

  const handleCatogry=async()=>{
    if(Categorydata){
      try {
        const result = await addCatogoryApi({Categorydata,allVideos:[]})
        console.log(result);
        if(result.status>=200&&result.status<300){
          toast.success(`${result.data.Categorydata} added  to your collection`)
        }
        setcategorydata("")
        handleClose()
        getallcatogory()
        
      } catch (error) {
        console.log(error);  
      }
    }
    else{
      toast.warning("please enter the catogory name")
    }
  }

  const videoDroped=async(e,catogoryid)=>{
    console.log(catogoryid);
    const videoid=e.dataTransfer.getData("videoId")

    try {
      const {data}=await getsinglevideoApi(videoid)
      console.log(data);
      let selectcatogory = allCatogory?.find(item=>item.id==catogoryid)
      selectcatogory.allVideos.push(data)
      console.log("iam all catogory",allCatogory);
      await updateCatogoryApi(catogoryid,selectcatogory)

      getallcatogory()
      const result=await deleteVideoApi(videoid)
      setDeletevideoresponse(result.data)
      
      console.log(result,"ima reslult");
      
      // setDeletevideoresponse(result.data)

    } catch (error) {
      console.log(error);  
    }
  }

  const dragOvercatogory=(e)=>{
    e.preventDefault()
  }
  const videoDraged=(e,catogoryDetails,videoDetails)=>{
    
    const sharedata={catogoryDetails,videoDetails}
    
    e.dataTransfer.setData("shareData",JSON.stringify(sharedata))
  }

  return (
    <div className=''>
      <div className='d-flex align-content-center mb-4 gap-3'>
        
        <h4>All Category</h4>
        
        <button
            onClick={handleShow}
            className="btn btn-info rounded-circle d-flex align-items-center justify-content-center"
            style={{
            width: "38px",
            fontSize:"25px",
            height: "38px",
            }}
        >
            +
        </button>
      </div>

      {allCatogory?.length>0?allCatogory?.map((item,index)=>(
      
        <div key={index} onDragOver={(e)=>dragOvercatogory(e)} droppable="true" onDrop={(e)=>videoDroped(e,item.id)} className='w-100 h-100 d-flex flex-column justify-content-between border p-2'>
        <div className='d-flex text-white border align-items-center fs-5 justify-content-between px-3'style={{height:"70px"}}>
          <h5>{item.Categorydata}</h5>
          <Button className='bg-danger border-black'><i onClick={()=>deleteCatogory(item.id)}  className='fa-solid  fa-trash'></i></Button>
        </div>
        <div className='border mt-2 px-3'>
          {item?.allVideos.length>0 ? 
            <div className='row mb-4'>
              
                {item?.allVideos?.map((video,index)=>
                <div key={index} className='col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6'  draggable={true} onDragStart={(e)=>videoDraged(e,item,video)} >
                   <VideoCard insideCatogory={true} displayData={video}/>
                </div>
                )}
              
            </div> : <div className='p-4'><h5 className='text-danger'>Nothing to Display</h5></div>
          }
        </div>
      </div>
    ))
      : <div className='ps-3'><h4 className='text-danger '>Nothing to display</h4></div> }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Catorgory Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="url" label="Catogory Name">
              <Form.Control onChange={(e)=>setcategorydata(e.target.value)} type="text" placeholder="Image url" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancele
          </Button>
          <Button variant="primary" onClick={handleCatogry}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category
