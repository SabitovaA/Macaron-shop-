import React from "react";
import cls from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelector,
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../../redux/CartSlice.jsx";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cart: cartProducts } = useSelector(cartSelector);
  console.log(cartProducts);
  const dispatch = useDispatch();
  const deleteProducts = (product) => {
    dispatch(deleteProduct(product));
  };
  const incrementProducts = (product) => {
    dispatch(incrementProduct(product));
  };
  const decrementProducts = (product) => {
    dispatch(decrementProduct(product));
  };

  const totalProducts = cartProducts.reduce((acc, item) => {
    return acc + item.count;
  }, 0);

  const totalSumProducts = cartProducts.reduce((acc, item) => {
    return acc + item.totalSum;
  }, 0);

  return (
    <>
      <div className={cls.cart__container}>
        <div className={cls.products__page}>
          {cartProducts &&
            cartProducts.map((item) => (
              <div className={cls.product__cart} key={item.ID}>
                <img className={cls.macaron} src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.totalSum}$</p>
                <div className={cls.counter}>
                     <button
                       onClick={() => decrementProducts(item)}
                       className={cls.counter__button}
                       >
                       -
                     </button>
                     <p>{item.count}</p>
                     <button
                       onClick={() => incrementProducts(item)}
                       className={cls.counter__button}
                       >
                       +
                     </button>
                     </div>
                     <button
                       onClick={() => deleteProducts(item)}
                       className={cls.delete}
                     >
                       x
                     </button>
              </div>
            ))}
        </div>
        <div className={cls.sum__products}>
          <p>Total products:{totalProducts}</p>
          <p>Total Summe:{totalSumProducts}$</p>
          <button className={cls.order}>Order now</button>
          <button className={cls.order__more}>Order more</button>
          <p className={cls.contact}>Do you have any questions? </p>
          <a href="">CONTACT US</a>
        </div>
      </div>
    </>
  );
}

export default Cart;
