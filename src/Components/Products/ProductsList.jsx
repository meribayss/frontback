import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../Context/CartContext";
import "../../Components/Products/ProductsList.css";
import ReactPaginate from "react-paginate";
import { mainContext } from "../../Context/MainContext";
import { Z } from "../../Config";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteContext } from "../../Context/FavoriteContext";

const ProductsList = () => {
  const {
    getProductsData,
    products,
    deleteProduct,
    editProduct,
    fetchByParams,
  } = useContext(mainContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavorite } = useContext(FavoriteContext);
  // const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  // console.log(...searchParams);

  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    // console.log("params With Type");
    return {
      type: type,
      search: searchParams.get("search"),
    };
  };

  const paramsNoType = () => {
    // console.log("params No Type");
    return {
      search: searchParams.get("search") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    fetchByParams();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams]);
  useEffect(() => {
    getProductsData();
  }, [searchParams]);

  return (
    <div className="main_container">
      <div className="filter">
        <Filter type={type} setType={setType} />
      </div>
      <div className="container">
        {products
          ? products
              // .slice(productVisited, sliceTwoIndex)
              .map((item) => (
                <Card
                  key={item.id}
                  className="cardd"
                  sx={{
                    borderRadius: "10px",
                    width: "500px",
                    height: "600px ",
                    marginTop: "130px",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "50",
                      alignItems: "center",
                      marginBottom: "auto",
                    }}
                    component="img"
                    alt={item.title}
                    height="50"
                    src={item.img}
                  />
                  {/* <CardMedia
                    sx={{
                      height: "150",
                      alignItems: "center",
                      marginBottom: "auto",
                    }}
                    component="img"
                    alt={item.title}
                    height="200"
                    // image={item.img1}
                  /> */}
                  <CardContent
                    sx={{ marginLeft: "20px", marginBottom: "30px" }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height="30px"
                    >
                      {item.desc}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      height="25px"
                    >
                      {item.category}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        marginTop: "20px",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <NavLink to={`/edit/${item.id}`}>
                      <Button
                        className="btn1"
                        justifyContent="end"
                        size="small"
                        variant="outlined"
                      >
                        Edit
                      </Button>
                    </NavLink>
                    <Button
                      sx={{
                        marginRight: "20px",
                      }}
                      onClick={() => deleteProduct(item.id)}
                      className="btn"
                      variant="outlined"
                    >
                      Delete <RestoreFromTrashIcon />
                    </Button>
                    <NavLink to={`/details/${item.id}`}>
                      <Button className="btn" variant="outlined">
                        Details
                      </Button>
                    </NavLink>

                    <Button onClick={(e) => addProductToCart(item)}>
                      <AddShoppingCartIcon />
                    </Button>
                    <Button onClick={(e) => addProductToFavorite(item)}>
                      <FavoriteBorderIcon />
                    </Button>
                  </CardActions>
                </Card>
              ))
          : null}
        {/* <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Forward"}
          pageCount={pageCount}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          onPageChange={changePage}
        /> */}
      </div>
    </div>
  );
};

export default ProductsList;
