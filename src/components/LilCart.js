import React from 'react'

function LilCart({onClose, onRemove, items = []}) {
    return (
        <div className="Overlay">
            <div className="LilCart"> 
            <h2>
                Корзина
                <img onClick={onClose} className="rmvbtn" src="./img/remove.svg" alt="remove"/>
            </h2>
            {
                items.length > 0 ? 
                <div>
                    <div className="Items">
                    {items.map((obj) => (
                        <div className="CartItem">
                            <img src={obj.imageUrl} alt="cartimage" />
                            <div>
                                <p>{obj.title}</p>
                                <b>{obj.price}грн.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className="rmvbtn" src="./img/remove.svg" alt="remove"/>
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
                 : <div className="CartEmpty">
                        <img src="./img/cart-empty.jpg" alt="cartempty"/>
                        <h2>Корзина пустая!</h2>
                        <p>Добавьте хотя бы один товар что бы сделать заказ</p>
                        <button onClick={onClose} className="GreenButton">
                            <img src="./img/arrowleft.svg" alt="arrowleft"/>
                            Вернуться назад
                        </button>
                </div>
            }
            </div>
        </div>
    )
}

export default LilCart
