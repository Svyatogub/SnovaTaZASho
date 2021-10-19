import React from 'react'

import Card from '../components/Card/Card'

function Favorites({items, onAddToFavorite}) 
    {
    return (
        <div className="Content">
        <div className="Search">
          <h1>Zakladki:)</h1>
        </div>
        
        <div className="Tabak">
          {items
              .map((item, index) => (
                <Card 
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                />
            ))}
        </div>
      </div>
    )
}

export default Favorites
