import { GoodsItem } from "../GoodsItem/GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  return (
    <>
      <div className="goods">
        {goods.map((item) => (
          <GoodsItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};
