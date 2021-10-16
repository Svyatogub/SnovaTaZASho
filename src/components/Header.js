import React from 'react'

function Header(props) {
    return (
        <header>
            <div className="headerLeft">
            <img src="./img/bong-solid.svg" alt="logo"/>
            <div className="headerInfo">
                <h3>Закинься или покури</h3>
                <p>Табачный магазин</p>
            </div>
            </div>
            <ul className="headerRight">
            <li className="FirstLi" onClick={props.onClickCart}>
                <img src="./img/shopping-bag-solid.svg" alt="basket"/>
                <span>1488 грн.</span>
            </li>
            <li>
                <img src="./img/user-solid.svg" alt="user"/>
            </li>
            </ul>
        </header>
    )
}

export default Header
