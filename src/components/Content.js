//import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import Cards from "./Cards";
import React, { useState } from "react";
import xx from "../Images/center.jpg";
export default function Content({ items }) {
  const [item1, setMenuItems] = useState(items);
  const filter = (catItm) => {
    const updateItem = items.filter((curEle) => {
      return curEle.category === catItm;
    });
    setMenuItems(updateItem);
  };

  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <button
          type="button"
          className="btn btn-dark m-4  ml-3 text-light fs-3 border-light col-lg-2 col-md-4 col-sm-8"
          onClick={() => setMenuItems(items)}
        >
          ALL
        </button>
        <button
          type="button"
          className="btn btn-dark m-4  text-light fs-3 border-light col-lg-2 col-md-4 col-sm-8"
          onClick={() => filter("BMW")}
        >
          BMW
        </button>
        <button
          className="btn btn-dark m-4 text-light fs-3 col-lg-2 col-md-4 col-sm-8"
          onClick={() => filter("JEEP")}
        >
          JEEP
        </button>
        <button
          className="btn btn-dark m-4 text-light fs-3 col-lg-2 col-md-4 col-sm-8"
          onClick={() => filter("MERCEDES")}
        >
          MERCEDES
        </button>
        <button
          className="btn btn-dark m-4 text-light fs-3 col-lg-2 col-md-4 col-sm-8"
          onClick={() => filter("AUDI")}
        >
          AUDI
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          {item1.map((item, index) => {
            //console.log(item.img);
            return (
              <Cards
                key={index}
                title={item.title}
                content={item.content}
                img={item.img}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
      <div></div>
      <div
        className="col-lg-12 mt-3"
        style={{ backgroundImage: `url(${xx})`, height: "1550px" }}
      >
        <div className="col-lg-12" style={{ height: "600px" }}></div>
        <h1 className="text-light text-lg-center text-md-center text-sm-center">
          You Are Welcome,
        </h1>

        <div className="col-lg-12" style={{ height: "300px" }}></div>
        <h1 className="text-light text-lg-center text-md-center text-sm-center">
          We Hope You Like Our Cars.
        </h1>
      </div>
    </div>
  );
}

/*export default class Content extends Component {
    render() {
        let {items}=this.props


        let foundBMW=()=>{

        console.log('BMW')
            }


        return (
            <div>
           <div>
               <button type='button' className='btn btn-dark m-5 text-light fs-3 border-light col-lg-2 col-md-4 col-sm-8' onClick={
                   foundBMW
               }>BMW</button>
            <button className='btn btn-dark m-5 text-light fs-3 col-lg-2 col-md-4 col-sm-8' >JEEP</button>
            <button className='btn btn-dark m-5 text-light fs-3 col-lg-2 col-md-4 col-sm-8'>MERCEDES</button>
            <button className='btn btn-dark m-5 text-light fs-3 col-lg-2 col-md-4 col-sm-8'>AUDI</button>
           </div>

            <div className='container-fluid'>
            <div className='row'>

            {items.map((item,index)=>{
                return <Cards key={index} title={item.title} content={item.content} img={item.img}  category={item.category}/>
            })  }

            </div>
            </div>
            <div>

            </div>
            <div className='col-lg-12'  style={{backgroundImage: `url(${xx})`,height:'1550px'}}>
             <div className='col-lg-12'  style={{height:'600px'}}>
             </div>
            <h1 className='text-light text-lg-center text-md-center text-sm-center'>You Are Welcome,</h1>

            <div className='col-lg-12'  style={{height:'300px'}}></div>
            <h1 className='text-light text-lg-center text-md-center text-sm-center'>We Hope You Like Our Cars.</h1>
            </div>
            </div>

        )
    }
}*/
