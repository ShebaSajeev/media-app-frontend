import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddVideo from '../Components/AddVideo';
import { Link } from 'react-router-dom'
import { FaHistory } from "react-icons/fa";
import ViewVideo from '../Components/ViewVideo';
import AddCategory from '../Components/AddCategory';

function Home() {
  const [addVideoResponse,setAddVideoResponse] = useState([])
  return (
    <>
    <div>
        <Row className='d-flex justify-content-evenly'>
            <Col className='d-flex p-5'>
            <h3>Upload new video</h3>
            <AddVideo setAddVideoResponse={setAddVideoResponse} />
            </Col>

            <Col className='p-5'>
            <Link style={{textDecoration:'none'}} to={'/watch-history'}>
            <h4>Watch history <FaHistory /></h4>
            </Link>
            </Col>
        </Row>

        <Row>
            <Col lg={9}>
               {/* view videos */}
               <h3>All Videos</h3>
               <ViewVideo addVideoResponse={addVideoResponse}/>

            </Col>

            <Col lg={3}>
               {/* AddCategory */}
               <h3>Category</h3>
               <AddCategory/>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Home