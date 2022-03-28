import { useState, useEffect } from "react";
import { baseService } from "../../services/ApiCall";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getOrders();
    getProductDetail();
  }, [orders]);

  //#region Fetch orders
  const getOrders = async () => {
    try {
      const data = await baseService.get("/carts/user/1");
      setOrders(data);
    } catch (err) {
      console.log("[ERROR]: ", err);
    }
  };
  //#endregion

  //#region Go to product detail
  const getProductDetail = async () => {
    try {
      const data = await baseService.get(`/products/`);
      setProducts(data);
    } catch (err) {
      console.log("[ERROR]: ", err);
    }
  };
  //#endregion

  return (
    <main className="bg-gray-50 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="p-10 text-3xl font-extrabold text-gray-900">
          Your Orders
        </h1>
        {orders.map((order) => (
          <div
            key={order.id}
            className="mx-auto pt-10 pb-16 sm:pb-24 lg:pb-32 lg:max-w-7xl"
          >
            <h3>{order.date}</h3>
            {order.products.map((product) => (
              <div key={product.productId}>
                {product.productId} - Qty {product.quantity}
                {
                  products.filter((p) => p.id === product.productId).map(product =>
                    (<div>
                      {product.image}
                    </div>))
                }
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default OrderList;
