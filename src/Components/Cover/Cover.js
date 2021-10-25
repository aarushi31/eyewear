import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Cover.css'
import c1 from '../../images/cover1.jpeg'
import c2 from '../../images/cover2.png'

function Cover() {
    return (
        <Carousel>
  <Carousel.Item> 
    <img
      className="d-block w-100"
      src={c2}
      alt="First slide"

      style={{height:'550px'}}
    />
    {/* <Carousel.Caption className="caption slide-up" >
      <h3 style={{color:'black'}}>First slide label</h3>
      <p style={{color:'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <button style={{color:'black',border:'1px solid black'}}>Shop Collection</button>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="Second slide"
      style={{height:'550px'}}
    />

    {/* <Carousel.Caption className="caption slide-up">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Shop Collection</button>
    </Carousel.Caption> */}
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.zennioptical.com/marketing/campaign/shop-by-color/2021/Red_PLP_Banner-xs.jpg?quality=high"
      alt="Third slide"
      style={{height:'550px'}}
    />

    <Carousel.Caption className=" caption slide-up" >
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <button>Shop Collection</button>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
    )
}

export default Cover
