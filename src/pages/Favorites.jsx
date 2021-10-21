import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'

function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContext)

    return (
        <div className="Content">
        <div className="Search">
          <h1>Закладки</h1>
        </div>
        
        <div className="Tabak">
          {favorites.map((item, index) => (
                <Card 
                  key={index}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                  {...item}
                />
            ))}
        </div>
      </div>
    )
}

export default Favorites
