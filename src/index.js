import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from "./assets/bg1.jpg";
import bg3 from "./assets/bg3.jpg";


const App = () => {
  return (
    <>
      <Header title='Header title' descr='Header description' />
      <Layout title='Layout1 title' descr='Layout1 description' urlBg={bg1} colorBg='' />
      <Layout title='Layout2 title' descr='Layout2 description' colorBg='#e2e2e2' />
      <Layout title='Layout3 title' descr='Layout3 description' urlBg={bg3} colorBg='' />
      <Footer />
    </>
  );
};


ReactDom.render(<App />, document.getElementById("root"));

console.log(typeof React);
