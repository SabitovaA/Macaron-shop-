import React from 'react'
import cls from './Favoriet.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, cartSelector } from '../../redux/CartSlice';


function Favoriet() {
  const {favourite: favouriteProducts } = useSelector(cartSelector);

  const dispatch = useDispatch()
  const addProductToCart = (product) => {
    dispatch(addProduct(product))
 }
  return (
    <div className={cls.products__container}>
      {favouriteProducts &&
        favouriteProducts.map((item) => (
          <div className={cls.products__box} key={item.ID}>
            <div className={cls.product}>
                <img className={cls.macaron} src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
            </div>
            <div  className={cls.button__box}>
                <button onClick={() => addProductToCart(item)}  className={cls.button}>add to cart</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Favoriet