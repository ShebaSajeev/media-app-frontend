import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/AllAPIs';
import VideoCard from './VideoCard';

function AddCategory() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [categoryName,setCategoryName] = useState("")// to hold categories

  const [getCategory,setGetCategory] = useState({
    categoryName:"",
    allVideos:[]


  })
  const [deleteStatus,setDeleteStatus] = useState("")
  
  const handleAdd = async()=>{

    const body ={
      categoryName,
      allVideos:[]
    
    }
    if(categoryName){
      try{
        const response = await addCategoryAPI(body)
    console.log(response);
    console.log(categoryName);
    alert('Added Category'+categoryName)
    handleGetCategory()
    setCategoryName("")
    handleClose()
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      alert('please enter')
    }
   
    
  }
  const handleGetCategory = async () =>{
    const response = await getCategoryAPI()
    console.log(response);
    setGetCategory(response.data)
    
  }
  const handleDelete = async(id)=>{
     const response = await deleteCategoryAPI(id)
     console.log(response);
     setDeleteStatus(response)
     
  }

  const videoDrop = async(e,categoryId)=>{
    console.log("video drop"+categoryId,e);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("videoId: "+videoId);
    
    e.preventDefault()
    //get a particular video
    const {data}= await getAVideoAPI(videoId)
    console.log(data);
    //get category details
    const selectedCategory = getCategory?.find(item=>item.id===categoryId)
    console.log(selectedCategory);

    //add videos into the all videos category
    selectedCategory.allVideos.push(data)
    await updateCategoryAPI(categoryId,selectedCategory)
    handleGetCategory()
    
  }

  const dragOver=(e)=>{
    console.log("videoDrar Over");
    e.preventDefault()
    
  }

  useEffect(()=>{
    handleGetCategory()
  },[deleteStatus])

  return (
    <div>
        
      <div className="d-grid gap-2 me-3">
      <Button variant="warning" size="lg" onClick={handleShow} >
      Add Category
      </Button>
      <div className="row">
       {
        getCategory.length>0? getCategory.map(item=>(
          <div onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,item.id)} className="col m-4 p-4 border border-light d-flex justify-content-between">
          <p className=''>{item.categoryName}</p>
          <i onClick={()=>handleDelete(item.id)} className='fa-solid fa-trash text-danger'></i>
          <div className='row'>
             <div className='col'>
              {item.allVideos && item.allVideos.map((data)=>(
                <VideoCard displayVideo={data}/>
              ))}
             </div>
          </div>
       </div>
        )): <p>No data found</p>
       }
      </div>
     
      
      </div>
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input onChange={(e)=>setCategoryName(e.target.value)}  type="text" placeholder='Category name' className='form-control' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default AddCategory