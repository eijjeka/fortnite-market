import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (name) =>
  toast.success(`${name} add in basket`, {
    autoClose: 2000,
    pauseOnHover: false,
  });

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
          onClick={() => {
            notify(name);
            addToBasket({ id, name, price });
          }}
          className="btn"
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} $
        </span>
      </div>
      <ToastContainer transition={Slide} />
    </div>
  );
};
