import React from 'react'
import AppContext from '../context'
import styles from '../LilCart/LilCart.module.scss'

const Info = ({image, title, descriprion}) => {
    const {setCartOpen} = React.useContext(AppContext)

    return (
        <div className={styles.CartEmpty}>
            <img src={image} alt="cartempty"/>
            <h2>{title}</h2>
            <p>{descriprion}</p>
            <button onClick={() => setCartOpen(false)} className="GreenButton">
                <img src="img/arrowleft.svg" alt="arrowleft"/>
                Вернуться назад
            </button>
        </div>
    )
}

export default Info
