import React from "react";

const List = ({ people }) => {
  return (
    <>
      <ul>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <li className="person" key={id}>
              <img src={image} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
