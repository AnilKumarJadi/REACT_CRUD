import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
// import Class1 from './class_work/class1';
// import Class2 from './class_work/class2';
import FetchData from './class_work/FecthData';
import Axios from './class_work/Axios';
import UseStateExample from './class_work/UseStateExample';
import UseStateTodo from './class_work/useStateTodo';
// import NewTodoList from './class_work/NewTodoList';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './class_work/Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <App/> */}
  {/* <BrowserRouter>
  <App />
  </BrowserRouter> */}
    
    {/* <Class1/> */}
    {/* <Class2/> */}
{/* <FetchData/> */}
{/* <Axios/> */}
  {/* <UseStateExample/> */}
  {/* <UseStateTodo/> */}
  {/* we are provide centrailize data */}
 <Provider store={store}> {/* store is props */}
   <App/>
 </Provider> 
  </>
);

 
