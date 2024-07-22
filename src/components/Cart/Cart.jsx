import React from "react";
import cls from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSelector,
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../../redux/CartSlice.jsx";
import {NavLink } from "react-router-dom";
import Button from "../../UI/button/Button.jsx";

function Cart() {
  const { cart: cartProducts } = useSelector(cartSelector);
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
      <div className={cls.cart__container}>
        <div className={cls.products__page}>
          {cartProducts &&
            cartProducts.map((item) => (
              <div className={cls.product__cart} key={item.ID}>
                <img className={cls.macaron} src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.totalSum}$</p>
                <div className={cls.counter}>
                    <Button onClick={() => decrementProducts(item)} value={'-'}/>
                     <p>{item.count}</p>
                    <Button onClick={() => incrementProducts(item)} value={'+'}/>
                     </div>
                    <Button onClick={() => deleteProducts(item)} value={'x'} classButton={'delete'}/>
              </div>
            ))}
        </div>
        <div className={cls.sum__products}>
          <p>Total products:{totalProducts}</p>
          <p>Total Summe:{totalSumProducts}$</p>
          <NavLink className={cls.link} to="/order" >Order now</NavLink>
          <NavLink className={cls.link} to={'/'}>Order more</NavLink>
          <p className={cls.contact}>Do you have any questions? </p>
          <a href="">CONTACT US</a>
        </div>
      </div>
  );
}

export default Cart;
