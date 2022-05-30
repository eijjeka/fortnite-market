export const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeFromBasket,
  incQuantity,
  decQuantity,
}) => {
  return (
    <li className="collection-item">
      {name}
      <button
        className="button-dec"
        disabled={quantity === 0 ?? "disabled"}
        onClick={() => {
          decQuantity(id);
        }}
      >
        -
      </button>
      {quantity}
      <button
        className="button-inc"
        onClick={() => {
          incQuantity(id);
        }}
      >
        +
      </button>
      = {price * quantity} $
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};
