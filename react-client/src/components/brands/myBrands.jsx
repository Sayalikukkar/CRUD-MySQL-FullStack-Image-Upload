import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MyBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7777/api/brands/getAll").then((response) => {
      console.log(response.data);
      setBrands(response.data);
    });
  }, []);

  return (
    <div className="container">
      {brands.map((item) => {
        const {id, brand, image, description } = item;
        return (
          <div className="card mt-5 mx-auto" style={{ width: "30%" }}>
            {/* <img src={image} class="card-img-top" alt=" "></img> */}
            <div class="card-body">
              <h6 class="card-title">{id}</h6>
              <h5 class="card-title">{brand}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">{image}</p>
              <button type="submit" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MyBrands;
