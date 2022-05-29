import { GoodsItem } from "../GoodsItem/GoodsItem";

export const GoodsList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="goods">
        {items.map((item) => (
          <GoodsItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};
