import {useState,useEffect} from 'react';
import { baseService } from '../../services/ApiCall'


const OrderList = () => {
const [orders, setOrders] = useState([])
useEffect(() => {
  getOrders()
}, [orders])

const getOrders = async () => {
  try{
    const data = await baseService.get('/carts/user/2')
    setOrders(data)
  }catch(err){
    console.log('[ERROR]: ', err);
  }
}
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>
          <h3>{order.date}</h3>
          {order.products.map(product => (
            <div key={product.productId}>
              {product.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OrderList