import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(amount< 0) amount = 0;
    if(amount >8)  amount = 8;
    setTexts(data.slice(0, amount))
  };
  const handlerChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>

        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={handlerChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {texts.map((text,index)=>{
          return <p key={index}>{text}</p>
        })}
      </article>
    </section>
  );
}

export default App;
