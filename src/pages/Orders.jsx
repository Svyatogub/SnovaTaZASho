import axios from 'axios'
import React from 'react'
import Card from '../components/Card/Card'

function Orders() {
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get('https://616704b513aa1d00170a6957.mockapi.io/orders')
      setOrders(data.reduce((prev,obj) => [...prev, ...obj.items], []))
      setIsLoading(false)
      } catch (error) {
        alert("Ошибка при запросе заказов")
        console.error(error)
      }
    })()
  }, [])
    return (
        <div className="Content">
        <div className="Search">
          <h1>Заказы</h1>
        </div>
        
        <div className="Tabak">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                <Card 
                key={index}
                loading={isLoading}
                {...item}
                />
            ))}
        </div>
      </div>
    )
}

export default Orders
