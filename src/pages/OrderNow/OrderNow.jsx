import React from 'react'
import cls from './OrderNow.module.css'
function OrderNow() {
  return (
    <div className={cls.container__order}>
       <form className={cls.form__order} action="">
           <h2>Order now</h2>
          <input className={cls.long__input} type="text" placeholder='email'/>
          <input className={cls.long__input}  type="password" placeholder='password'/>
          <button className={cls.btn__pay}>Login and Pay</button>
          <button className={cls.btn__register}>Register</button>
          <button className={cls.btn__without}>Pay without registration</button>
          <p className={cls.forgot__login}>Do you forgot password or login? <a className={cls.help} href="">Help</a></p>
       </form>
    </div>
  )
}

export default OrderNow