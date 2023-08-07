import React from "react";
import { useState} from "react";
import axios from "axios";

const Brands = () => {
  const [brand, setBrands] = useState("");
  const [description, setDescription] = useState("");
  const [file1, setFile1] = useState("");

  const addBrands = (e) => {
    e.preventDefault();

    if (!brand || !description) {
      alert("Please fill all mandatory fields correctly!");
      return;
    }

    addMyBrand(brand, description, file1);
    
    setBrands("");
    setDescription("");
    setFile1("");

  }

  const addMyBrand = async () => {
    const formData = new FormData()

    formData.append('brand', brand)
    formData.append('description', description)
    formData.append('image', file1)

    await axios.post('http://localhost:7777/api/brands/addBrands', formData)
    console.log(formData);
  };

  return (
    <div className="container" style={{ width: "500px", marginTop: "100px"}}>
      <form onSubmit={addBrands} method= "POST">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Brand
          </label>
          <input
            type="text"
            value={brand} 
            onChange={(e) => setBrands(e.target.value)}
            className="form-control"
            id="brand"
            aria-describedby="brand name"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description name"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            file Upload
          </label>
          <input 
          class="form-control" 
          type="file" 
          id="formFile"
          onChange={(e) => setFile1(e.target.files[0])}
          placeholder=".jpg,.png,.webp"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Brands;
