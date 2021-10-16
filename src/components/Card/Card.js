import React from 'react'
import styles from './Card.module.scss'

function Card({onFavorite, onPlus, title, imageUrl, price}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Favorite} onClick={onFavorite}>
        <img src="./img/unliked.svg" alt="unliked"/>
      </div>
      <img src={imageUrl} alt="snyus arqa-buble gum"/>
      <h5>{title}</h5>
      <div className={styles.Price}>
        <div>
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <img 
          className={styles.Plus} 
          onClick={onClickPlus} 
          src={isAdded ? "./img/added.svg" : "./img/plusbtn.svg"} 
          alt="add button"
        />
      </div>
    </div>
    )
}

export default Card
 