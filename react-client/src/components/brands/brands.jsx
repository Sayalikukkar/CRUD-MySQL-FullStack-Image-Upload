import React from "react";


const Brands = () => {
  return (
    <div className="container" style={{ width: "500px", marginTop: "100px"}}>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Brand
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            file Upload
          </label>
          <input class="form-control" type="file" id="formFile"></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Brands;
