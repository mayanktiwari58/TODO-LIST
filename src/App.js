import React, { useState,useEffect } from "react";
import ToDoList from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvents = (events) => {
    setInputList(events.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
      return index !==id;
          });
    });
  };
 

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className="input">
            <input
              type="text"
              placeholder="Add a Item"
              value={inputList}
              onChange={itemEvents}
            />
            <button onClick={listOfItems}>+</button>
          </div>

          <ol>
            {Items.map((itemval, index) => {
              return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
