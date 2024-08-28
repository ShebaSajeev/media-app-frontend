import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/AllAPIs';

export default function WatchHistory() {

  const [history,setHistory]= useState([])
  const[deleteStatus,setDeleteStatus]=useState("")
  const getWatchHistory = async()=>{
    const response = await getHistoryAPI()
    console.log(response.data);
    setHistory(response.data)
    
    
    
  }

  const handleDelete =async(id)=>{
    const response = await deleteHistoryAPI(id)
    console.log(response);
    setDeleteStatus(response)
    
  }
  useEffect(()=>{
    getWatchHistory()
  },[deleteStatus])


  return (
    <div>
        <Row>
            <Col className='d-flex justify-content-between m-3'>
               <h4>Watch History</h4>
               <Link style={{textDecoration:'none'}} to={'/'}><h4><IoMdHome /> Back Home</h4></Link>
            </Col>
        </Row>

        <Row>
            <Col>
            <Table striped="columns">
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       
      {
         history?  history.map((item,index)=>(
          // console.log(item.caption)
          
         <tr>
         <td>{index+1}</td>
         <td>{item.caption}</td>
         <td>{item.embedLink}</td>
         <td>{item.timestamp}</td>
         <td><i onClick={()=>handleDelete(item.id)} className='btn btn-danger fa-solid fa-trash m-3 text-white'></i></td>
         </tr>
         ))
         : <p>No data found </p>
      }
      
        
          </tbody>
         </Table>
 


            </Col>
        </Row>
    </div>
  )
}
