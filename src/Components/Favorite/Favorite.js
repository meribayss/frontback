import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React, { useContext, useEffect, useState } from "react";
import Input from "@mui/material/Input";
import {
  FavoriteContext,
  favoriteContext,
} from "../../Context/FavoriteContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import ReactPaginate from "react-paginate";
import "./Favorite.css";
import { mainContext } from "../../Context/MainContext";

const Favorite = () => {
  const { favorite, getFavorite, deleteFavoriteProduct } =
    useContext(FavoriteContext);
  useEffect(() => {
    getFavorite();
  }, []);
  const { products } = useContext(mainContext);
  const [pageNumber, setPageNumber] = useState(0);
  const productsLimit = 6;
  const productVisited = pageNumber * productsLimit;

  const pageCount = Math.ceil(
    favorite.favoriteProducts?.length / productsLimit
  );

  let sliceTwoIndex = productVisited + productsLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="favorite">
      {favorite.favoriteProducts ? (
        <div className="favorite_container">
          {favorite.favoriteProducts
            .slice(productVisited, sliceTwoIndex)
            .map((elem) => (
              <Card
                className="cards"
                key={elem.item.id}
                sx={{
                  maxWidth: 345,
                  borderRadius: "15px",
                  width: "370px",
                  height: "530px ",
                  marginBottom: "50px",
                }}
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardMedia
                  sx={{
                    height: "50",
                    alignItems: "center",
                    marginBottom: "auto",
                  }}
                  component="img"
                  // alt={elem.item.title}
                  height="50"
                  src={elem.item.img}
                />
                <CardMedia
                  sx={{
                    width: "200px",
                    height: "220px",
                    alignItems: "center",
                    margin: "auto",
                  }}
                  component="img"
                  alt={elem.item.title}
                  height="100"
                  image={elem.item.img1}
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    gutterBottom
                    // variant="h5"
                    color="text.secondary"
                  >
                    {elem.item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="15px"
                    mt="10px"
                  >
                    {elem.item.description}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {elem.item.type}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                    fontSize="24px"
                    marginTop="5px"
                  >
                    {elem.item.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites"></IconButton>
                  <Button
                    onClick={() => deleteFavoriteProduct(elem.item.id)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                  <Button>
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            ))}
          <ReactPaginate
            previousLabel={"Назад"}
            nextLabel={"Вперед"}
            pageCount={pageCount}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            onPageChange={changePage}
          />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default Favorite;
