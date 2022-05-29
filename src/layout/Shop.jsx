import { useState, useEffect } from "react";
import { GoodsList } from "../components/GoodsList/GoodList";
import { API_URL } from "../config";
import { Preloader } from "../components/Preloader/Preloader";

export const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <main className="container content">
        {loading ? <Preloader /> : <GoodsList items={goods} />}
      </main>
    </>
  );
};
