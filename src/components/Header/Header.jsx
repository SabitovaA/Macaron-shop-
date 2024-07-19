import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/CartSlice";
import logo from '../../assets/image/logo.png'
import cls from './Header.module.css'
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

function Header() {
    const {cart:cartProducts,favourite:cartFavourite} = useSelector(cartSelector) 
    
  return (
      <nav className={cls.header__nav}>
          <NavLink className={cls.link__home} to="/"><HiOutlineHome className={cls.cart__icon}  /></NavLink>
          <NavLink to="/"><img className={cls.logo} src={logo} alt="" /></NavLink>
          <div className={cls.links__container}>
              <NavLink to='favoriet' className={cls.icon__cart_container}>
                <FaRegHeart className={cls.cart__icon} />
                <p className={cls.count}>{cartFavourite.length}</p>
              </NavLink>
              <NavLink className={cls.icon__cart_container} to="cart">
                 <MdOutlineShoppingCart className={cls.cart__icon} />
                 <p className={cls.count}>{cartProducts.length}</p>
              </NavLink>
          </div>
      </nav>
  );
}

export default Header;
