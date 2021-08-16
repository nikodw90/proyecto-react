import { useEffect, useState } from "react";
import { ItemDetail } from "../componets/ItemDetail";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = ({ item }) => {
  const [fireDetail, setFireDetail] = useState();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      const category = item.find((product) => product.id === productId);
      setFireDetail(category);
    }
  }, [productId, item]);

  return (
    <div className="cardcontainer">
      {fireDetail ? (
        <ItemDetail
          key={fireDetail.id}
          id={fireDetail.id}
          name={fireDetail.title}
          img={fireDetail.img}
          price={fireDetail.price}
          stock={fireDetail.stock}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
