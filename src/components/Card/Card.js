import React from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'

import styles from './Card.module.scss'

function Card({id, 
  onFavorite, 
  onPlus,  
  name, 
  imageUrl, 
  price,
  favorited = false, 
  loading = false}) {
    const {isItemAdded} = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const Obj = {id, parentId: id, name, imageUrl, price}
    
  const onClickPlus = () => {
    onPlus(Obj);
  }

  const onClickFavorite = () => {
    onFavorite(Obj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.Card}>
      {
        loading ? 
        <ContentLoader 
        speed={2}
        width={200}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="0" y="170" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="196" rx="5" ry="5" width="100" height="15" /> 
        <rect x="0" y="232" rx="5" ry="5" width="80" height="25" /> 
        <rect x="115" y="226" rx="10" ry="10" width="32" height="32" /> 
        <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
        </ContentLoader>
        :
        <>
          {onFavorite && <div className={styles.Favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? "./img/liked.svg" : "./img/unliked.svg"} alt="unliked"/>
          </div>}
          <img src={imageUrl} alt="product"/>
          <h5>{name}</h5>
          <div className={styles.Price}>
            <div>
              <span>Цена: </span>
              <b>{price}</b>
            </div>
          {onPlus && <img 
            className={styles.Plus} 
            onClick={onClickPlus} 
            src={isItemAdded(id) ? "./img/added.svg" : "./img/plusbtn.svg"} 
            alt="add button"
          />}
          </div>
        </>
      }
    </div>
  )
}

export default Card
 