import React from 'react'

function LilCart({onClose, items = []}) {
    return (
        <div className="Overlay">
            <div className="LilCart"> 
            <h2>
                Корзина
                <img onClick={onClose} className="rmvbtn" src="./img/remove.svg" alt="remove"/>
            </h2>
            <div className="Items">
                {items.map((obj) => (
                    <div className="CartItem">
                        <img src={obj.imageUrl} alt="cartimage" />
                        <div>
                            <p>{obj.title}.</p>
                            <b>{obj.price}грн.</b>
                        </div>
                        <img className="rmvbtn" src="./img/remove.svg" alt="remove"/>
                    </div>
                ))}
            </div>
            <div className="CartBlock">
                <ul>
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>456грн.</b>
                </li>
                <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>22,8грн</b>
                </li>
                </ul>
                <button className="GreenButton">Оформить заказ</button>
            </div>
            </div>
        </div>
    )
}

export default LilCart
