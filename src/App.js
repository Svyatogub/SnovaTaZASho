import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import LilCart from "./components/LilCart";

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpen, setCartOpen] = React.useState(false)

  React.useEffect(() => {
    fetch('https://616704b513aa1d00170a6957.mockapi.io/items')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }
  console.log(cartItems)

  return (
    <div className="wrapper">
      {cartOpen && <LilCart items={cartItems} onClose={() => setCartOpen(false)}/>}
      <Header onClickCart={() => setCartOpen(true)}/>
      <div className="Content">
        <div className="Search">
          <h1>Весь никотин</h1>
          <div className="Search-block">
            <img src="./img/search-solid.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="Sneakers">
          {items.map((item) => (
            <Card 
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>item
    </div>
  )
}

export default App;
