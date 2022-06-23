import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container__cart">
      <div>
        <table
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {/* <thead>
              <tr style={{ display: "flex", border: "1px solid white" }}>
                <th> Фото </th>
              
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма продукта</th>
              </tr>
            </thead> */}
          </div>
          <tbody className="container">
            {cart.products
              ? cart.products.map((elem) => (
                  <tr key={elem.item.id}>
                    <td>
                      <th className="th-cart"> Фото </th>
                      <img width={50} src={elem.item.img} alt="phone" />
                    </td>

                    <td>
                      {" "}
                      <th className="th-cart">Название</th>
                      {elem.item.title}
                    </td>
                    <td>
                      <th className="th-cart">Цена</th>
                      {elem.item.price}
                    </td>
                    <td>
                      {" "}
                      <th className="th-cart">Количество</th>
                      <input
                        type="number"
                        value={elem.count}
                        onChange={(e) =>
                          changeProductCount(elem.item.id, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      {" "}
                      <th className="th-cart">Сумма продукта</th>
                      {elem.subPrice}
                    </td>
                    <td>
                      <button
                        className="btn-cart-delete"
                        onClick={() => deleteCartProduct(elem.item.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <h4
          className="h4-cart"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Общая сумма: {cart.totalPrice}
          <NavLink to="/payment">
            <button className="btn">Заказать</button>
          </NavLink>
        </h4>
      </div>
    </div>
  );
};

export default Cart;
