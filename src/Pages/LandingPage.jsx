import React from 'react'
import Music from '../assets/music.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <section>
            <div className="row">
                <div className="col-6 p-5">
                    <h1>Welcome to <span className='text-warning'>Media Player</span></h1>
                  
                    <p className='text-white' style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aspernatur, odit est dignissimos perspiciatis, maxime assumenda unde eos dolores expedita ut, magnam quisquam necessitatibus explicabo iure enim incidunt molestias beatae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat excepturi harum quisquam officia commodi accusantium qui maxime recusandae, modi eos soluta esse autem aperiam repellat, magni sequi quia. Nesciunt, eos?</p>
                    <div className='text-center'>
                        <Link to={'/home'}>
                            <button className='btn btn-warning'>Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src={Music} alt="" width={'100%'} height={'400px'} />
                </div>
            </div>
        </section>

        <section>
            <h1 className='text-center mt-5 mb-3'>Features</h1>
            <Row className='p-5'>
                <Col >
                    <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="https://i.pinimg.com/originals/93/2f/d0/932fd00d9b43753061c47739f0cc777b.gif" width={'200px'} height={'250px'} />
                    <Card.Body>
                   <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                   </Card.Text>
                    
                    </Card.Body>
                     </Card>
                </Col>
                <Col >
                    <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" width={'200px'} height={'250px'} />
                    <Card.Body>
                   <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                   </Card.Text>
                    
                    </Card.Body>
                     </Card>
                </Col>
                <Col >
                    <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src="https://i.pinimg.com/originals/f5/7f/4e/f57f4e47c4faab3ea7b357a85910a80b.gif" width={'200px'} height={'250px'} />
                    <Card.Body>
                   <Card.Title>Card Title</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                   </Card.Text>
                    
                    </Card.Body>
                     </Card>
                </Col>
            </Row>
        </section>

        <section>
            <Row className='border border-3 rounded-4 m-5 p-5'>
                <Col>
                   <h2 className='m-4 text-warning'>Simple Fast and PowerFul</h2>
                   <p style={{textAlign:'justify'}}><strong>Play Everything</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis molestiae ipsam dolore magni dolorum consectetur mollitia enim sit iusto? Facilis deleniti molestiae mollitia quaerat adipisci iusto quas quam sed?</p>
                   <p  style={{textAlign:'justify'}}><strong>Play Everything</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis molestiae ipsam dolore magni dolorum consectetur mollitia enim sit iusto? Facilis deleniti molestiae mollitia quaerat adipisci iusto quas quam sed?</p>
                   <p  style={{textAlign:'justify'}}><strong>Play Everything</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis molestiae ipsam dolore magni dolorum consectetur mollitia enim sit iusto? Facilis deleniti molestiae mollitia quaerat adipisci iusto quas quam sed?</p>
                </Col>

                <Col>
                    
                </Col>
  
            </Row>
        </section>
    </div>
  )
}

export default LandingPage