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
          <thead>
            <tr style={{ display: "flex", border: "1px solid white" }}>
              <th>Фото</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма продукта</th>
            </tr>
          </thead>
          <tbody>
            {cart.products
              ? cart.products.map((elem) => (
                  <tr key={elem.item.id}>
                    <td>
                      <img width={50} src={elem.item.img1} alt="phone" />
                    </td>
                    <td>{elem.item.title}</td>
                    <td>{elem.item.price}</td>
                    <td>
                      <input
                        type="number"
                        value={elem.count}
                        onChange={(e) =>
                          changeProductCount(elem.item.id, e.target.value)
                        }
                      />
                    </td>
                    <td>{elem.subPrice}</td>
                    <td>
                      <button onClick={() => deleteCartProduct(elem.item.id)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <h4
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Общая сумма: {cart.totalPrice}
          <NavLink to="/payment">
            <button>Заказать</button>
          </NavLink>
        </h4>
      </div>
    </div>
  );
};

export default Cart;
