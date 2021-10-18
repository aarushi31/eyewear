import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Cover.css'

function Cover() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.thewirecutter.com/wp-content/media/2020/12/bluelightblockingglasses-2048px-9995.jpg?auto=webp&quality=75&width=1024"
      alt="First slide"

      style={{height:'550px'}}
    />
    <Carousel.Caption className="caption slide-up" >
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <button>Shop Collection</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.karousell.com/media/photos/products/2020/9/12/sunnies_specs_hans_canyon_1599888647_ef4e0c1e.jpg"
      alt="Second slide"
      style={{height:'550px'}}
    />

    <Carousel.Caption className="caption slide-up">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Shop Collection</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
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
  </Carousel.Item>
</Carousel>
    )
}

export default Cover
