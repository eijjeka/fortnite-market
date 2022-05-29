export const GoodsItem = ({ data }) => {
  const { name, images, description, price } = data;
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
        <button className="btn">Buy</button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} $
        </span>
      </div>
    </div>
  );
};
