import React, { useState } from "react";
import "./Ajouter.css";

const Ajouter = ({ taks, setTaks, isfinish,index }) => {
    const [name,setName]= useState("")
    const app = (e)=>{
        setName(e.target.value)
    }
//   const [diseable, setDiseable] = useState(false);
//   const handlick = () => {
//     setDiseable(true);
//   };

  return (
    <>
      <div className="chu">
        <textarea
          name=""
          placeholder="rempliseez"
          value={taks}
          disabled={isfinish}
        //   onChange={app()}
        onChange={(r)=>{setTaks((e)=>e.map((t,ind)=> ind===index ? {...t, taks: r.target.value} : t ))}}
        />
        <button
          className="delete"
          onClick={() => {
            setTaks((old) => old.filter((q) => q.taks != taks));
          }}
        >
          delete
        </button>
        { (
          <button
            onClick={() => {
              setTaks((old) =>
                old.map((r) => (r.taks === taks ? { ...r, isfinish: !isfinish } : r))
              );
            //   handlick();
            }}
            className="modify"
          >
            {!isfinish ? "terminer" : "Non terminer"}
          </button>
        )}
        {/* <button className='modifier' onClick={()=>{setTaks((old)=>old.find(s=> s.old=== old))}}>modifier</button> */}
      </div>
    </>
  );
};

export default Ajouter;
