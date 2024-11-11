import React, { useState } from "react";
import Ajouter from './Ajouter'
import "./todo.css";


 
const Todo = () => {
  const [unput,setUnput] = useState("")
  const [taks,setTaks] = useState([])
  console.log(taks);

  return (
    <>
      <div className="content">
        <div className="container">
          <h1>Ma Todolist</h1>
            <div className="haut">
              <input className="inpat"  type="text" placeholder="choisissez vos taches" value={unput} onChange={(e)=> {setUnput(e.target.value)}}/>
              <button className="add" onClick={(e)=>{
               e.preventDefault(); 
               if(unput.trim()!== ""){
                setTaks([...taks,{taks:unput.trim(),isfinish:false}]);
                setUnput("")
               }
               
              }}>Add</button>
            </div>
            {
               taks.map((t,index)=>{
                console.log("t",t);
                return <Ajouter taks={t.taks} isfinish={t.isfinish} setTaks={setTaks} index={index}/>
               })
            }
        </div>
      </div>
    </>
  );
};

export default Todo;
