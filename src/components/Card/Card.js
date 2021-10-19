import React from 'react'
import styles from './Card.module.scss'

function Card({id, onFavorite, onPlus, favorited = false, title, imageUrl, price}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.Card}>
      <div className={styles.Favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "./img/liked.svg" : "./img/unliked.svg"} alt="unliked"/>
      </div>
      <img src={imageUrl} alt="product"/>
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
 