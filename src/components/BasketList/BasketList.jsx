import { BasketItem } from "../BasketItem/BasketItem";

export const BasketList = ({
  order,
  onOpenBasket,
  removeFromBasket,
  incQuantity,
  decQuantity,
}) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Basket empty</li>
      )}
      <li className="collection-item">Total quantity: {totalPrice} $</li>
      <li className="item">
        <button className="waves-effect right waves-light btn-small">
          Сheckout
        </button>
      </li>
      <i className="material-icons basket-close" onClick={onOpenBasket}>
        close
      </i>
    </ul>
  );
};
