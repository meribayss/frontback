import "./AddProduct.css";
import React, { useContext, useState } from "react";
// import { productContext } from "../../Context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mainContext } from "../../Context/MainContext";

const initObj = {
  price: 0,
  title: "",
  category: "",
  description: "",
  author: "",
  // img1: "",
  // img2: "",
  // img3: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(mainContext);
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
      inpValues.price.toString().trim() === "" ||
      inpValues.title.trim() === "" ||
      inpValues.category.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.author.trim() === ""
      // inpValues.img1.trim() === "" ||
      // inpValues.img2.trim() === "" ||
      // inpValues.img3.trim() === ""
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
            <label>Price</label>
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              name="price"
              value={inpValues.price}
            ></input>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="title"
              value={inpValues.title}
            ></input>
            {/* <label value={inpValues.category} name="category" for="cars">
              Choose a country:
            </label>
            <select id="country" name="country">
              <option value="usa">USA</option>
              <option value="southKorea">South Korea</option>
              <option value="jamaica">Jamaica</option>
              <option value="mexico">Mexico</option>
              <option value="greece">Greece</option>
              <option value="thailand">Thailand</option>
              <option value="maldives">Maldives</option>
            </select> */}

            <label>Category</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="category"
              value={inpValues.category}
            ></input>
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="description"
              value={inpValues.description}
            ></input>
            <label>Author</label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="author"
              value={inpValues.author}
            ></input>
            {/* <label>IMG1</label>
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
            ></input> */}

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
