import React from "react";
import { useParams } from "react-router-dom";
import { techsoul, websiteSolution } from "../constants";

const ServiceDEtail = () => {
  const { serviceId } = useParams();
  let find;

  if (serviceId >= 1 && serviceId <= 6) {
    find = websiteSolution.filter((obj) => {
      return obj.id === serviceId;
    });
  } else {
    find = techsoul.filter((obj) => {
      return obj.id === serviceId;
    });
  }

  const { title, desc, img } = { ...find[0] };

  return (
    <div className="detail">
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>Order Now</button>
      </div>

      <img src={img} alt={title} />
    </div>
  );
};

export default ServiceDEtail;
