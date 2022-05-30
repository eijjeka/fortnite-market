export const Cart = ({ quantity, onOpenBasket }) => {
  return (
    <div
      className="cart blue darken-4 white-text"
      onClick={() => onOpenBasket()}
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};
