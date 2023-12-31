import React from "react";
const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa1 ma2 grow bw1 shadow-5">
      <img src={`https://robohash.org/${id}?size=400x400`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
