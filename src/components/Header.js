import React, { Component, useState } from 'react'
import { Dropdown } from 'bootstrap'
import l from '../Images/logo.jpg'


export default function Header() {
  const[count,setCount] =useState(0)
  const increasCount=()=>{
    setCount(count++);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
          <img src={l} width='70px' style={{borderRadius:'40px'}}/>
            <a className="navbar-brand text-light fs-1 m-3" href="#">Ayaad's Cars.</a>
            <button className="navbar-toggler bg-light btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto ">
                <li className="nav-item">
                  <a className="nav-link active text-light m-2" aria-current="page" href="#">Home&nbsp;<i class='fas fa-home'/>
                  <span class='sr-only'>(current)</span></a>
                </li>
                <li class="nav-item">
                  <p className="nav-link text-light m-2">Count : 0</p>
                </li>
                <li className="nav-item dropdown text-light ">
                  <a className="nav-link dropdown-toggle text-light m-2 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu text-light " aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item " href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr> </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                 {/* <a className="nav-link disabled text-light m-2" href="#" tabindex="-1" aria-disabled="true">Disabled</a>*/}
               /* </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2 btn-outline-light" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
            
  )
}

/*export default class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
          <img src={l} width='70px' style={{borderRadius:'40px'}}/>
            <a className="navbar-brand text-light fs-1 m-3" href="#">Ayaad's Cars.</a>
            <button className="navbar-toggler bg-light btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto ">
                <li className="nav-item">
                  <a className="nav-link active text-light m-2" aria-current="page" href="#">Home&nbsp;<i class='fas fa-home'/>
                  <span class='sr-only'>(current)</span></a>
                </li>
                <li class="nav-item">
                  <p className="nav-link text-light m-2">Count: 0</p>
                </li>
                <li className="nav-item dropdown text-light ">
                  <a className="nav-link dropdown-toggle text-light m-2 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu text-light " aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item " href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr> </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                 {/* <a className="nav-link disabled text-light m-2" href="#" tabindex="-1" aria-disabled="true">Disabled</a>}
               /* </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2 btn-outline-light" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
            
        )
    }
}*/
