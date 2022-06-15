import "./AddProduct.css";
import React, { useContext, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initObj = {
  title: "",
  type: "",
  description: "",
  price: 0,
  img1: "",
  img2: "",
  img3: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inpValues, setInpValues] = useState(initObj);

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    // console.log(obj);
  };

  const clearInput = () => {
    setInpValues(initObj);
  };

  const handleSave = (e) => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.toString().trim() === "" ||
      inpValues.img1.trim() === "" ||
      inpValues.img2.trim() === "" ||
      inpValues.img3.trim() === ""
    ) {
      alertToastify();
      return;
    }
    e.preventDefault();
    addProduct(inpValues);
    clearInput();
  };

  return (
    <div className="pricing">
      <div className="card-container">
        111
        <div className="form">
          <form>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="title"
              value={inpValues.title}
            ></input>

            <label>Type</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="type"
              value={inpValues.type}
            ></input>
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="description"
              value={inpValues.description}
            ></input>
            <label>Price</label>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              name="price"
              value={inpValues.price}
            ></input>
            <label>IMG1</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="img1"
              value={inpValues.img1}
            ></input>
            <label>IMG2</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="img2"
              value={inpValues.img2}
            ></input>
            <label>IMG3</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="img3"
              value={inpValues.img3}
            ></input>

            <button
              onClick={handleSave}
              type="button"
              variant="contained"
              className="btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
