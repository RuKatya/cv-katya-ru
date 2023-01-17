import React from "react";

const CardEdAndEx = ({ info }) => {
  return (
    <>
      <div>
        <h3>{info.years}</h3>
        <h2>{info.place}</h2>
        <ul>
          {info.more.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardEdAndEx;
