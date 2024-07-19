import React, { useState } from "react";
import cart from "../../index.js";
import { useDispatch} from "react-redux";
import { addProduct, addProductToFavoriet} from "../../redux/CartSlice.jsx";
import cls from './Products.module.css'
import { HiMiniHeart } from "react-icons/hi2";

function Products() {
  const [favourites, setFavourites] = useState({});
   const dispatch = useDispatch()

   const addProductToCart = (product) => {
      dispatch(addProduct(product))
   }
   const addProductToFavorietet = (product) => {
    dispatch(addProductToFavoriet(product))
    setFavourites((prevFavourites) => ({
      ...prevFavourites,
      [product.ID]: !prevFavourites[product.ID],
    }));
  }
  return (
    <div className={cls.products__container}>
      {cart &&
        cart.map((item) => (
          <div className={cls.products__box} key={item.ID}>
            <div className={cls.product}>
              <div className={cls.heard}>
                   <HiMiniHeart onClick={() => addProductToFavorietet(item)}  
                   className={`${cls.product__favourite} ${favourites[item.ID] && cls.product__favouriteActive}`}/>
              </div>
                <img className={cls.macaron} src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </div>
            <div onClick={() => addProductToCart(item)} className={cls.button__box}>
                <button  className={cls.button}>+</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
