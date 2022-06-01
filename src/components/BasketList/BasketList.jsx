import { BasketItem } from "../BasketItem/BasketItem";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export const BasketList = () => {
  const { handleBasketShow, order = [] } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Basket empty</li>
      )}
      <li className="collection-item">Total quantity: {totalPrice} $</li>
      <li className="item">
        <button className="waves-effect right waves-light btn-small">
          Сheckout
        </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};
