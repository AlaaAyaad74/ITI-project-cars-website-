import React, { Component } from "react";
//import React from 'react'
import { increasCount } from "./Header";
export default function Cards(item) {
  const addOne = () => {
    console.log("Alaa Ayaad");
    console.log(item);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-5">
      <div className="card" /*style={{height:'600px'}}*/>
        <div className="card-body">
          <img src={item.img} /*style{{}}*/ className="card-img-top" />
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.content}</p>

          <button className="btn btn-dark" onClick={addOne}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} /*>
           /*<div className="card-body">
           <img src={img} /*style{{}}*/ /*className='card-img-top'/>
           <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>

            <a href="#" className="btn btn-dark">Add to Cart</a>
            </div>
            </div>
             </div>






        )
    }
}*/

/*export default class Cards extends Component {

    render() {
      let {title,content,img}=this.props
        return (


           <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mb-5" >
           <div className="card" /*style={{height:'600px'}}*/
