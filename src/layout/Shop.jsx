import { useEffect, useContext } from "react";
import { ShopContext } from "../context/context";
import { GoodsList } from "../components/GoodsList/GoodList";
import { Cart } from "../components/Cart/Cart";
import { BasketList } from "../components/BasketList/BasketList";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "../components/Preloader/Preloader";

export const Shop = () => {
  const { loading, isBasketShow, setGoods } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.items);
      });
  }, [setGoods]);

  return (
    <>
      <main className="container content">
        <Cart />
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow && <BasketList />}
      </main>
    </>
  );
};
