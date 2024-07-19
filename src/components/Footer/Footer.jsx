import React from 'react'
import cls from './Footer.module.css'
import insta from '../../assets/image/insta.png'
import wk from '../../assets/image/wk.png'
import facebook from '../../assets/image/facebook.png'

function Footer() {
  return (
    <footer className={cls.footer}>
        <div className={cls.information}>
            <h4>Information</h4>
            <p><a href="">about us</a></p>
            <p> <a href="">delivery and payment</a></p>
            <p><a href="">contacts</a></p>
        </div>
        <div>
            <h4>Catalog</h4>
            <p><a href="">for wedding</a></p>
            <p><a href="">for event</a></p>
        </div>
        <div>
            <h4>Interesting</h4>
            <p><a href="">action</a></p> 
            <p><a href="">event</a></p>
        </div>
        <div className={cls.media}>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={wk} alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer