import React from 'react'
import Card from "../components/Card/Card";


function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart}) 
    {
    return (
        <div className="Content">
        <div className="Search">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Весь никотин"}</h1>
          <div className="Search-block">
            {searchValue && <img onClick={() => setSearchValue("")} className="clear" src="./img/remove.svg" alt="clear"/>}
            <img src="./img/search-solid.svg" alt="search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="Tabak">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card 
                key={index}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
          ))}
        </div>
      </div>
    )
}

export default Home
