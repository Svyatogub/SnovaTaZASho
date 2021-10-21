import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from '../hooks/useCart'


function Header(props) {
    const {totalPrice} = useCart()


    return (
        <header>
            <Link to="/">
                <div className="headerLeft">
                    <img src="./img/bong-solid.svg" alt="logo"/>
                    <div className="headerInfo">
                        <h3>Давай Закинемся</h3>
                        <p>Табачный магазин</p>
                    </div>
                </div>
            </Link>
            <ul className="headerRight">
            <li className="FirstLi" onClick={props.onClickCart}>
                <img src="./img/shopping-bag-solid.svg" alt="basket"/>
                <span>{totalPrice}грн.</span>
            </li>
            <li className="SecondLi">
                <Link to="/favorites">
                    <img src="./img/heart-solid.svg" alt="favorites"/>
                </Link>
            </li>
            <li className="ThirdLi">
                <Link to="/orders">
                    <img src="./img/user-solid.svg" alt="user"/>
                </Link>
            </li>
            </ul>
        </header>
    )
}

export default Header
