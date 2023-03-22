import React, { useReducer } from "react";
import { Router } from "react-router-dom";
import { StateContextCustom } from "./context/StateContext";

const App = () => {
const {name} = StateContextCustom()
console.log(name);

  const initialState = {
    count : 0,
    value : 10
  }

const reducer = (state,action) => {
  switch (action.type) {
    case "increase":
    return {...state,count : state.count + action.payload };
    case "increase2":
      return {...state,value : state.value + 10}
    default:
      return state
  }
}

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
  <Router basename = '/'>
    <div className="px-10 py-10">
    <div>
    <h2 className="text-3xl ">{state.count}</h2>
    <button onClick={() =>  dispatch ({type:"increase",payload : 25})} className="px-6 py-1 bg-red-300 text-white rounded shadow-sm">increase</button>
    </div>

    <div>
    <h2 className="text-3xl ">{state.value}</h2>
    <button onClick={() =>  dispatch ({type:"increase2"})} className="px-6 py-1 bg-red-300 text-white rounded shadow-sm">increase2</button>
    </div>

  </div>
  </Router>
  )
};

export default App;
