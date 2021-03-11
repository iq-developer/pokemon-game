import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header title='' descr='' />
      <Layout title='' descr='' urlBg='' colorBg='' />
      <Layout title='' descr='' colorBg='' />
      <Layout title='' descr='' urlBg='' colorBg='' />
      <Footer />
    </>
  );
};


// const AppList = () => {
//   return (
//     <ul>
//       <li>My first list</li>
//       <li>My second list</li>
//     </ul>
//   );
// };

// const AppHeader = ({title, hideBg = false}) => {
//   const bull = undefined;
//   const styleRoot = hideBg ? {color: 'yellow'} : {};
//   return (
//     <>
//       <label htmlFor="idshnik">label</label>

//       {
//         title && (<h1 id="idshnik" hidden={bull} tabIndex={bull ? 1 : 0} className="header" style={styleRoot}>
//           Hello, World, {bull ? "yes" : "no"} React.js! {title}
//         </h1>)
//       }

//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <AppHeader
//         title='my Krishna title'
//         hideBg
//       />
//       <AppList />
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));

console.log(typeof React);
