import React from 'react'

import Card from "../components/Card/Card";



function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
  }) {

    const renderItems = () => {
      const filteredItems = items.filter((item) => 
        item.name.toLowerCase().includes(searchValue.toLowerCase()))
      return (isLoading ? [...Array(12)] : filteredItems)
        .map((item, index) => (
          <Card 
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))
    }

    return (
        <div className="Content">
        <div className="Search">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Весь снюс"}</h1>
          <div className="Search-block">
            {searchValue && <img onClick={() => setSearchValue("")} className="clear" src="./img/remove.svg" alt="clear"/>}
            <img src="./img/search-solid.svg" alt="search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="Tabak">
          {renderItems()}
        </div>
      </div>
    )
}

export default Home
