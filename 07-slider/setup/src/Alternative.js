import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

const prevSlide = ()=>{
    setIndex((oldIndex) => {
        let i = oldIndex - 1
        if(i<0){
            i  = people.length  - 1;
        }
        return i;
    })
}
const nextSlide = ()=>{
    setIndex((oldIndex) => {
        let i = oldIndex + 1
        if(i > people.length -1){
            i  = 0;
        }
        return i;
    })
}

useEffect(() => {
  let slider = setInterval(()=>{
    setIndex(index + 1)
  },3000)
  return ()=> clearInterval(slider)
},[index])

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>

        <div className="section-center">
          {people.map((person, pIndex) => {
            let position = "nextSlide";
            if (pIndex === index) {
              position = "activeSlide";
            }
            if (
              pIndex === index - 1 ||
              (index === 0 && pIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={person.id} className={position}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="person-img"
                />
                <h4>{person.name}</h4>
                <p className="title">{person.title}</p>
                <p className="text">{person.quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
