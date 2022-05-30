import { GoodsItem } from "../GoodsItem/GoodsItem";

export const GoodsList = ({ items, addToBasket }) => {
  return (
    <>
      <div className="goods">
        {items.map((item) => (
          <GoodsItem addToBasket={addToBasket} key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};
