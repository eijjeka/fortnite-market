export const GoodsItem = ({ data, addToBasket }) => {
  const { id, name, images, description, price } = data;
  return (
    <div className="card">
      <div className="card-image">
        <img alt={name} src={images.full_background} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addToBasket({ id, name, price })}
          className="btn"
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} $
        </span>
      </div>
    </div>
  );
};
