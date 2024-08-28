import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CiVideoOn } from "react-icons/ci";
function Header() {
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className='text-white fs-1 '>
          <CiVideoOn className='me-2 fs-1 text-warning' />
           <span className='text-warning'> Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header