import React from 'react'
import A from '../Images/3.jpg'
import EE from '../Images/2.jpg'
import c from '../Images/999.jpg'
import cc from '../Images/99.jpg'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Slider() {
    return (
        <div>
        <div /*className='mt-3 '*/>
           <Carousel >
               <Carousel.Item>
                   <img src={A}  width='100%' height='600px' alt="Alaa Ayaad"/>
                   <Carousel.Caption>
                   <h1 className='text-xl-start text-light'>
                       -Mercedes Benz-
                   </h1>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={EE}  width='100%' height='600px'  alt="Alaa Ayaad"/>
                   <Carousel.Caption>
                   <h1 className='text-xl-start text-light'>
                       -JEEP-
                   </h1>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={c}  width='100%' height='600px'  alt="Alaa Ayaad"/>
                   <Carousel.Caption>
                   <h1 className='text-xl-start text-light'>
                       -BMW-
                   </h1>
               </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img src={cc}  width='100%' height='600px'  alt="Alaa Ayaad"/>
                   <Carousel.Caption>
                   <h1 className='text-xl-start text-light'>
                       -AUDI-
                   </h1>
               </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
           </div>
           
           </div>
           
        );
    }

        
