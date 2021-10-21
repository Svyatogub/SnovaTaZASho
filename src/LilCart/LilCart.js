import React from 'react'
import axios from 'axios'

import Info from '../components/Info'
import { useCart } from '../hooks/useCart'

import styles from './LilCart.module.scss'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function LilCart({onClose, onRemove, items = [], open}) {
    const {cartItems, setCartItems, totalPrice} = useCart()
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)


    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://616704b513aa1d00170a6957.mockapi.io/orders', {items: cartItems});
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete('https://616704b513aa1d00170a6957.mockapi.io/cart/' + item.id);
                await delay(1000)
            }
        } catch (error) {
            alert("Ошибка при создании заказа :(")
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.Overlay} ${open ? styles.OverlayVisible : "" }`}>
            <div className={styles.LilCart}> 
            <h2>
                Корзина
                <img onClick={onClose} className={styles.rmvbtn} src="img/remove.svg" alt="remove"/>
            </h2>
            {
                items.length > 0 ? 
                <div className={styles.WholeBlock}>
                    <div className={styles.Items}>
                    {items.map((obj) => (
                        <div key={obj.id} className={styles.CartItem}>
                            <img src={obj.imageUrl} alt="cartimage" />
                            <div>
                                <p>{obj.name}</p>
                                <b>{obj.price}грн.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className={styles.rmvbtn} src="img/remove.svg" alt="remove"/>
                        </div>
                    ))}
                    </div>
                     <div className={styles.CartBlock}>
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice}грн.</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{totalPrice * 0.05}грн</b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder} className={styles.GreenButton}>
                            Оформить заказ
                        </button>
                    </div>
                </div>
                 :  
                    <Info 
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая!" }
                        descriprion={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы один товар что бы сделать заказ"} 
                        image={isOrderComplete ? "img/order-colpete.jpg" : "img/cart-empty.jpg" }
                    />
            }
            </div>
        </div>
    )
}

export default LilCart
