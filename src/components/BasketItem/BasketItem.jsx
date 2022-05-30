export const BasketItem = ({ id, name, price, quantity, removeFromBasket }) => {
  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity}
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
