import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { addVideoApi, getVideoApi, updateCatogoryApi } from '../services/allApi'


function View({ addvideoResponse, deletevideocatogoryResponse, setupdateCatogoryresponse }) {

  const [allvideos, setAllvedios] = useState([])

  const [deletevideoResponse, setvideodeleteResponse] = useState("")
  const dragOverView = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    getAllVideos()
  }, [addvideoResponse, deletevideoResponse, deletevideocatogoryResponse])
  const getAllVideos = async () => {
    try {
      const result = await getVideoApi()
      console.log("getresult", result);
      if (result.status >= 200 && result.status < 300) {
        setAllvedios(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handelevideoDroped = async (e) => {

    const { catogoryDetails, videoDetails } = JSON.parse(e.dataTransfer.getData("shareData"))

    const { id, Categorydata } = catogoryDetails

    console.log(id, Categorydata, "id catogoryname");
    const updatecatogryVideos = catogoryDetails.allVideos.filter(video => video.id != videoDetails.id)

    try {
      const result = await updateCatogoryApi(id, { id, Categorydata, allVideos: updatecatogryVideos });
      console.log("updateresult", result);

      if (result.status >= 200 && result.status < 300) {
        console.log(result.data, "rsjklasjflafjlaj;la");
        setupdateCatogoryresponse(result.data)
        await addVideoApi(videoDetails)
        getAllVideos()

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div >
      <div className='  text-center' >
        <Row className='' droppable="true" onDragOver={(e) => dragOverView(e)} onDrop={(e) => handelevideoDroped(e)} >
          {allvideos?.length > 0 ?
            allvideos.map((videos, index) => (
              <Col key={index} xl={4} lg={5} md={4} sm={4} xs={6}>
                <VideoCard displayData={videos} setvideodeleteResponse={setvideodeleteResponse} />
              </Col>
            ))
            :
            <div style={{ height: '410px' }} className='w-100 fw-bolder d-flex align-items-center justify-content-center'>
              <h4 className='text-danger '>Nothing to display</h4>
            </div>
          }
        </Row>
      </div>
    </div>
  )
}

export default View
