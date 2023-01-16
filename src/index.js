// import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(
//   <App />,
// 	document.querySelector("#root")
// );

// const elem1 = React.createElement('span', { children: 'Privet' });
// const elem2 = React.createElement('span', { children: 'mir' });

// const elem1 = <span>Privet</span>;
// const elem2 = <span>Mir</span>;

// const element = React.createElement('div',
//   { a: 5, b: 10, children: `Privet mir` });

// const jsxElements = <div>{elem1} {elem2}</div>;

// console.log(jsxElements);

// ReactDOM.render(jsxElements, document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
