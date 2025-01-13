import React from 'react'
import Add from '../headandfooter/Add'
import View from '../headandfooter/View'
import Category from '../headandfooter/Category'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {

    const [addvideoResponse, setaddvideoResponse] = useState("")
    const [deletevideocatogoryResponse, setDeletevideoresponse] = useState("")
    const [updateCatogoryresponse, setupdateCatogoryresponse] = useState("")
    return (
        <>
            <div className='container my-5 d-flex justify-content-between'>
                <div className='w-50'><Add setaddvideoResponse={setaddvideoResponse} /></div>
                <Link className='text-decoration-none w-50 text-end fw-bold text-white fs-5 ' to='/history'>HISTORY</Link>
            </div>
            <div className='container-fluid row me-0 ms-0 my-5'>
                <div className='col-lg-6 mb-4'>
                    <div className='mb-3'>
                        <h4 className='py-1'>All Videos</h4>
                    </div>
                    <View setupdateCatogoryresponse={setupdateCatogoryresponse} addvideoResponse={addvideoResponse} deletevideocatogoryResponse={deletevideocatogoryResponse} />

                </div>
                <div className='col-lg-6'>
                    <Category updateCatogoryresponse={updateCatogoryresponse} setDeletevideoresponse={setDeletevideoresponse} />
                </div>
            </div>
        </>
    )
}

export default Home
