import React from "react";

const Service = ({ serviceabc}) => {
    const {name, description, img} = serviceabc;
  return (
    <div className="card  bg-base-100 drop-shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="card-actions">
          
        </div>
      </div>
    </div>
  );
};

export default Service;
