import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { addVideoAPI } from '../Services/AllAPIs';
import Swal from 'sweetalert2'
function AddVideo({setAddVideoResponse}) {
  const [video,setVideo] = useState({
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);
  const getEmbedLink =(e)=>{
    console.log(e.target.value);
    const {value}=e.target
    console.log(value);
   console.log(value.slice(-31));
   const link=`https://www.youtube.com/embed/${value.slice(-31)}`
   setVideo({...video,embedLink:link})
    
    
  }
  const handleUpload = async()=>{
    const {caption,url,embedLink}=video
    if(!caption||!url||!embedLink){
      alert('please fill')
    }
    else{
      try{
        const response= await addVideoAPI(video)
        console.log(response);
        if(response.status>=200 && response.status<=300){
          console.log(response.data);//data
          setAddVideoResponse(response.data)
          //modal close 
          Swal.fire({
            title: 'Success!',
            text: 'Video Added Success',
            icon: 'success',
            confirmButtonText: 'Back'
          })
          handleClose()
          // alert('video added successfully..')
        }
        else{
          console.log(response.message);
          Swal.fire({
            title: 'Error!',
            text: response.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          handleClose()
          // alert(response.message)
          
        }
      }
      catch(err){
        console.log(err);
        
      }
      
    }
  }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="" className='m-0 fs-5' onClick={handleShow}>
         <FaCloudUploadAlt />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FaFilm /> Upload Videos</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          Please fill the following details
          <div className='border border-3 rounded m-3 p-4'>
            <input onChange={e=>setVideo({...video,caption:e.target.value})} type="text" placeholder='Video Caption'  className='rounded p-1 mb-3 ' style={{width:'100%'}}/>
            <input onChange={e=>setVideo({...video,url:e.target.value})} type="text" placeholder='Video Image'  className='rounded p-1 mb-3 ' style={{width:'100%'}}/>
            <input onChange={getEmbedLink} type="text" placeholder=' Video Url'  className='rounded p-1 mb-3 ' style={{width:'100%'}}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo