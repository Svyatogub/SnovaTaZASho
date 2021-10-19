import React from 'react'
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <header>
            <Link to="/">
                <div className="headerLeft">
                    <img src="./img/bong-solid.svg" alt="logo"/>
                    <div className="headerInfo">
                        <h3>Закинься или покури</h3>
                        <p>Табачный магазин</p>
                    </div>
                </div>
            </Link>
            <ul className="headerRight">
            <li className="FirstLi" onClick={props.onClickCart}>
                <img src="./img/shopping-bag-solid.svg" alt="basket"/>
                <span>1488 грн.</span>
            </li>
            <li className="SecondLi">
                <Link to="/favorites">
                    <img src="./img/heart-solid.svg" alt="favorites"/>
                </Link>
            </li>
            <li className="ThirdLi">
                <img src="./img/user-solid.svg" alt="user"/>
            </li>
            </ul>
        </header>
    )
}

export default Header
