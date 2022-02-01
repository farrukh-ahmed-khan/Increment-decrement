import React from 'react'
import "./App.css";
import {incNumber} from "./action";
import {decNumber} from "./action";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <div className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></div>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <div className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></div>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App