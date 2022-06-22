import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainContext } from "../../../Context/MainContext";
import "./EditProduct.css";

// const initObj = {
//   price: 0,
//   title: "",
//   category: "",
//   description: "",
// };

// const clearInput = () => {
//   setInpTitle(initObj);
//   setInpCategory(initObj);
//   setInpDesc(initObj);
//   setInpPrice(initObj);
// };
const EditProduct = () => {
  const {
    productDetails,
    getProductsDetails,
    editProduct,
    exactproduct,
    getExactProductData,
  } = useContext(mainContext);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // getProductsDetails(id);
    getExactProductData(id);
  }, []);
  //   const [inpValues, setInpValues] = useState(exactproduct);
  //   console.log(exactproduct.title);

  const [inpTitle, setInpTitle] = useState(exactproduct.title);
  const [inpCategory, setInpCategory] = useState(exactproduct.category);
  const [inpDesc, setInpDesc] = useState(exactproduct.desc);
  const [inpPrice, setInpPrice] = useState(exactproduct.price);

  const handleChange = (e) => {
    let obj = {
      title: inpTitle,
      type: inpCategory,
      desc: inpDesc,
      price: inpPrice,
    };
    // setInpValues(obj);
    editProduct(obj, id);
    console.log(obj);
    // navigate("/productlist");
  };
  //   const handleSave = (id) => {};
  console.log(exactproduct.id, "id");

  return (
    <>
      {exactproduct ? (
        <form>
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            value={inpTitle}
            name="title"
            onChange={(e) => setInpTitle(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="type"
            variant="outlined"
            value={inpCategory}
            name="type"
            onChange={(e) => setInpCategory(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="desc"
            variant="outlined"
            value={inpDesc}
            name="description"
            onChange={(e) => setInpDesc(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            value={inpPrice}
            name="price"
            onChange={(e) => setInpPrice(e.target.value)}
          />
          <TextField />

          <Button
            type="button"
            onClick={() => handleChange(exactproduct.id)}
            variant="contained"
          >
            Edit
          </Button>
        </form>
      ) : null}
    </>
  );
};

export default EditProduct;
