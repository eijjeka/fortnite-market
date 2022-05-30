import { useState, useEffect } from "react";
import { GoodsList } from "../components/GoodsList/GoodList";
import { Cart } from "../components/Cart/Cart";
import { BasketList } from "../components/BasketList/BasketList";
import { API_URL } from "../config";
import { Preloader } from "../components/Preloader/Preloader";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, {
      headers: {
        Authorization: "0231ecc9-445060cc-405f7b99-c82d0006",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.items && setGoods(data.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, []);

  const addToBasket = (item) => {
    const ItemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (ItemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === ItemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        }
        return orderItem;
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  return (
    <>
      <main className="container content">
        <Cart quantity={order.length} onOpenBasket={handleBasketShow} />
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList addToBasket={addToBasket} items={goods} />
        )}
        {isBasketShow && (
          <BasketList
            removeFromBasket={removeFromBasket}
            onOpenBasket={handleBasketShow}
            order={order}
          />
        )}
      </main>
    </>
  );
};
