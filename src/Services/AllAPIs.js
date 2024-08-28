import { serverUrl } from "./serverURL";
import { commonAPI } from "./commomAPI";

//add videos api =>post=> localhost:3000/allvideos
export const addVideoAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allVideos`,reqBody)
}
//get all videos from json server =>get  localhost:3000/allvideos
export const getVideoAPI = async()=>{
    return await commonAPI('get',`${serverUrl}/allVideos`,{})
}

//get particular video=>et localhost:3000/allvideos/:89
export const getAVideoAPI = async(id)=>{
    return await commonAPI('get',`${serverUrl}/allVideos/${id}`,"")
}

//delete a video from json server =>delete localhost:3000/allvideos/:89
export const deleteVideoAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allVideos/${id}`,"")
}
//add history to api cal => post localhost:3000/watchHistory
export const addHistoryAPI = async(videoDetails)=>{
    return await commonAPI('post',`${serverUrl}/watchHistory`,videoDetails)
}

//get avideo from history=> get localhost:3000/watchHistory
export const getHistoryAPI =async ()=>{
    return await commonAPI('get',`${serverUrl}/watchHistory`,{})
}

//delete history api =>delete get localhost:3000/watchHistory/:89
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,"")
}
//add category api call =>post localhost:3000/category
export const addCategoryAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/category`,reqBody)
}

//get category =>get localhost:3000/category
export const getCategoryAPI = async()=>{
    return await commonAPI('get',`${serverUrl}/category`,"")
}
//delete category=> delete localhost:3000/category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/${id}`,"")
}
//update category=> put localhost:3000/category
export const updateCategoryAPI = async(id,category)=>{
    return await commonAPI('put',`${serverUrl}/category/${id}`,category)
}