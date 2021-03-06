import axios from "axios";
import React, { useReducer, createContext } from "react";
// import axios from "axios";
import { API } from "../Config";

export const mainContext = createContext();

const INIT_STATE = {
  products: [],
  exactproduct: {},
  productToEdit: {},

  //   uaer: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_DATA":
      return { ...state, products: action.payload };
    case "GET_EXACT_PRODUCT_DATA":
      return { ...state, exactproduct: action.payload };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    // case "GET_USER_DATA":
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
};

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProductsData = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_PRODUCTS_DATA",
      payload: data.results,
    });
  };

  // console.log(state.products, "List of products in context");

  const getExactProductData = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_EXACT_PRODUCT_DATA",
      payload: data,
    });
  };

  const editProduct = async (newProduct, id) => {
    console.log(id, newProduct, "hey test");
    let token = localStorage.getItem("access");
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    let formData = new FormData();
    formData.append("price", newProduct.price);
    formData.append("title", newProduct.title);
    formData.append("category", newProduct.type);
    formData.append("desc", newProduct.desc);
    // formData.append("available", newProduct.available);

    let { data } = await axios.patch(`${API}/update/${id}/`, formData, config);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
    getProductsData();
  };

  //   const getUserData = async (email) => {
  //     let { data } = await axios(`http://35.192.150.161/profile_client/${email}`);
  //     dispatch({
  //       type: "GET_USER_DATA",
  //       payload: data,
  //     });
  //   };

  const addProduct = async (newProduct) => {
    let token = localStorage.getItem("access");
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(config);
    let formData = new FormData();
    formData.append("price", newProduct.price);
    formData.append("title", newProduct.title);
    formData.append("category", newProduct.category);
    formData.append("desc", newProduct.desc);
    formData.append("author", newProduct.author);

    await axios.post(`${API}/create/`, formData, config);
    getProductsData();
  };

  const deleteProduct = async (id) => {
    let token = localStorage.getItem("access");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`${API}/delete/${id}`, config);
    getProductsData();
  };

  const saveProduct = async (newProduct, id) => {
    let token = localStorage.getItem("access");
    console.log(token, "token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.patch(`${API}/update/${id}`, newProduct, config);
    getProductsData();
  };

  const fetchByParams = async (value) => {
    if (value === "all") {
      getProductsData();
    } else if (
      value === "USA" ||
      value === "South Korea" ||
      value === "Jamaica" ||
      value === "Mexico" ||
      value === "Greece" ||
      value === "Thailand" ||
      value === "Maldives"
    ) {
      const { data } = await axios(
        `${API}/?price=&title=&author=&category=${value}`
      );
      dispatch({
        type: "GET_PRODUCTS_DATA",
        payload: data.results,
      });
    }
  };

  return (
    <mainContext.Provider
      value={{
        products: state.products,
        exactproduct: state.exactproduct,
        productToEdit: state.productToEdit,
        // user: state.user,
        getProductsData,
        getExactProductData,
        // getUserData,
        addProduct,
        deleteProduct,
        editProduct,
        saveProduct,
        fetchByParams,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
