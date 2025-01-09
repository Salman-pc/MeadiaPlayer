import commonApi  from "./commonApi";
import server_url from "./server_url";

//add video
export const addVideoApi=async(reqBody) =>{
   return await commonApi("POST",`${server_url}/allVideos`,reqBody)
}

//get video
export const getVideoApi=async ()=>{
    return commonApi("GET",`${server_url}/allVideos`,"")
}

//delete video
export const deleteVideoApi=async (videoId)=>{
    return commonApi("DELETE",`${server_url}/allVideos/${videoId}`,{})}

//add to history watching time history
export const savehistoryApi=async(hisotrydetails)=>{
    return await commonApi("POST",`${server_url}/history`,hisotrydetails)
}

//get to history details 
export const getHistoryApi=async ()=>{
    return commonApi("GET",`${server_url}/history`,"")
}

//delete history api data
export const deleteHistoryVideoApi=async (videoId)=>{
    return commonApi("DELETE",`${server_url}/history/${videoId}`,{})}

    // add catogories video ctaogory section
export const addCatogoryApi=async(categorydetails)=>{
    return await commonApi("POST",`${server_url}/videoCatogory`,categorydetails)
}

//get to Catogory details
export const getCatogoryApi=async ()=>{
    return commonApi("GET",`${server_url}/videoCatogory`,"")
}

//delete catogory api data
export const deletecatogoryApi=async (videoId)=>{
    return commonApi("DELETE",`${server_url}/videoCatogory/${videoId}`,{})}

//get video to catogory drag time
export const getsinglevideoApi=async (videoid)=>{
    return commonApi("GET",`${server_url}/allVideos/${videoid}`,"")
}

export const updateCatogoryApi=async (catogoryid,categorydetails)=>{
    return commonApi("PUT",`${server_url}/videoCatogory/${catogoryid}`,categorydetails)
}