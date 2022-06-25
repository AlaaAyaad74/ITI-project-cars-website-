import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import Slider from "./components/Slider";
import Content from "./components/Content";

import dd from "../src/Images/16.jpeg";
import cc from "../src/Images/17.jpeg";
import ee from "../src/Images/18.jpg";
import ff from "../src/Images/19.jpg";
import jj from "../src/Images/20.jpg";
import hh from "../src/Images/21.jpeg";
import kk from "../src/Images/24.jpg";
import ll from "../src/Images/32.jpeg";
import mm from "../src/Images/26.jpg";
import nn from "../src/Images/27.jpg";
import oo from "../src/Images/28.jpg";
import pp from "../src/Images/29.jpg";
import qq from "../src/Images/30.jpg";
import ss from "../src/Images/31.jpeg";
import tt from "../src/Images/33.jpg";
import uu from "../src/Images/34.jpeg";
import vv from "../src/Images/35.jpg";
import ww from "../src/Images/36.jpeg";
import xx from "../src/Images/37.jpeg";
import yy from "../src/Images/38.jpg";
import zz from "../src/Images/39.jpeg";
import a from "../src/Images/40.jpeg";
import b from "../src/Images/41.jpeg";
import c from "../src/Images/42.jpg";
import Footer from "./components/Footer";

function App() {
  const items = [
    {
      id: 1,
      title: "Mercedes-G class",
      content: "$35.600.00 USD",
      img: kk,
      category: "MERCEDES",
    },
    {
      id: 2,
      title: "Jeep-Compass",
      content: "$80.090.00 USD",
      img: jj,
      category: "JEEP",
    },
    {
      id: 3,
      title: "Bmw-330i sport",
      content: "$25.300.00 USD",
      img: qq,
      category: "BMW",
    },
    {
      id: 4,
      title: "AUDI-A6",
      content: "$20.000.00 USD",
      img: xx,
      category: "AUDI",
    },
    {
      id: 5,
      title: "Mercedes-S class",
      content: "$30.600.00 USD",
      img: ll,
      category: "MERCEDES",
    },
    {
      id: 6,
      title: "Jeep-Wrangler",
      content: "$50,090.00 USD",
      img: cc,
      category: "JEEP",
    },
    {
      id: 7,
      title: "Bmw-X1",
      content: "$32.000.00 USD",
      img: ss,
      category: "BMW",
    },
    {
      id: 8,
      title: "AUDI-A8L",
      content: "$23.000.25 USD",
      img: yy,
      category: "AUDI",
    },
    {
      id: 9,
      title: "Mercedes-A class",
      content: "$25.460.00 USD",
      img: mm,
      category: "MERCEDES",
    },
    {
      id: 10,
      title: "Jeep-Renegade",
      content: "$22,850 USD",
      img: dd,
      category: "JEEP",
    },
    {
      id: 11,
      title: "Bmw-X7",
      content: "$40.000.00 USD",
      img: tt,
      category: "BMW",
    },
    {
      id: 12,
      title: "AUDI-E-TORN-GT",
      content: "$45.000.00 USD",
      img: zz,
      category: "AUDI",
    },
    {
      id: 13,
      title: "Mercedes-E class",
      content: "$40.300.00 USD",
      img: nn,
      category: "MERCEDES",
    },
    {
      id: 14,
      title: "Jeep-Renegade",
      content: "$22.850 USD",
      img: ee,
      category: "JEEP",
    },
    {
      id: 15,
      title: "Bmw-X4",
      content: "$20.000.00 USD",
      img: uu,
      category: "BMW",
    },
    {
      id: 16,
      title: "AUDI-E",
      content: "$27.000.60 USD",
      img: a,
      category: "AUDI",
    },
    {
      id: 17,
      title: "Mercedes-S class",
      content: "$27.800.00 USD",
      img: oo,
      category: "MERCEDES",
    },
    {
      id: 18,
      title: "Jeep-Compass",
      content: "$70.600.00 USD",
      img: ff,
      category: "JEEP",
    },
    {
      id: 19,
      title: "Bmw-8",
      content: "$50.460.00 USD",
      img: vv,
      category: "BMW",
    },
    {
      id: 20,
      title: "AUDI-RS7",
      content: "$28.000.99 USD",
      img: b,
      category: "AUDI",
    },
    {
      id: 21,
      title: "MERCEDES-S class",
      content: "$30.000.00 USD",
      img: pp,
      category: "MERCEDES",
    },
    {
      id: 22,
      title: "AUDI-Q8",
      content: "$21,090.00 USD",
      img: hh,
      category: "AUDI",
    },
    {
      id: 23,
      title: "BMW-X6",
      content: "$45.000.00 USD",
      img: ww,
      category: "BMW",
    },
    {
      id: 24,
      title: "AUDI-Q3",
      content: "$37.000.00 USD",
      img: c,
      category: "AUDI",
    },
  ];
  return (
    <>
      <Header />
      <Slider />
      <Content items={items} />
      <Footer />
    </>
  );
}

export default App;
