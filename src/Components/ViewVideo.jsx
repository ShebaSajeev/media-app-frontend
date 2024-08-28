import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getVideoAPI } from '../Services/AllAPIs';

function ViewVideo({addVideoResponse}) {
  const [allVideos,setAllVideos] = useState([])
 const [deleteVideoStatus,setDeleteVideoStatus] =useState("")
   const getVideos = async()=>{
      try{
         const response = await getVideoAPI()
          console.log(response.data);
         if(response.status>=200 && response.status<=300){
               setAllVideos(response.data) // to assign all videos to the state
         }
         else{
             console.log(response.message);
         
         }
      }
      catch(err){
         console.log(err);
         
         
      }
      
   }
 useEffect(()=>{
   getVideos()
 },[addVideoResponse,deleteVideoStatus])
  return (
    <div>
       <Row className='p-3  m-4'>
        {
         allVideos.length>0?
         allVideos.map(item=>(
         <Col className='m-4' sm={4}>
            <VideoCard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
         </Col>
         ))
         : <p>No Videos found</p>
        }
        
       </Row>
    </div>
  )
}

export default ViewVideo