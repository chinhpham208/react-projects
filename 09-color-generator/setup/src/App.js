import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors);
      setError(false)
      console.log(colors);
    }catch(err){
      setError(true)
      console.log(err)
    }

  };
  const onChangehandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={onChangehandler}
            placeholder="#f15025"
            className={`${error ? 'error': null}`}
          />
          <button className="btn" type="submit">
            Generator
          </button>
        </form>
      </section>
      <section className="colors">{/* list color here */}
      {list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
      })}
      </section>
    </>
  );
}

export default App;
