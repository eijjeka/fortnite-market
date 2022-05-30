import { useState, useEffect } from "react";
import { GoodsList } from "../components/GoodsList/GoodList";
import { Cart } from "../components/Cart/Cart";
import { BasketList } from "../components/BasketList/BasketList";
import { API_URL, API_KEY } from "../config";
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
        Authorization: API_KEY,
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

  const incQuantity = (itemId) => {
    const orderItem = order.map((item) => {
      if (itemId === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setOrder(orderItem);
  };

  const decQuantity = (itemId) => {
    const orderItem = order.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity >= 0 ? item.quantity - 1 : 0,
        };
      }
      return item;
    });

    setOrder(orderItem);
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
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        )}
      </main>
    </>
  );
};
