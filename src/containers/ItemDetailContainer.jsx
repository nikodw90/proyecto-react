import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = ({ items }) => {
  const [fireDetail, setFireDetail] = useState();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      const category = items.find((product) => product.id === productId);
      setFireDetail(category);
    }
  }, [productId, items]);

  return (
    <div className="card">
      {fireDetail ? (
        <ItemDetail
          key={fireDetail.id}
          id={fireDetail.id}
          nombre={fireDetail.title}
          img={fireDetail.thumbnail}
          precio={fireDetail.price}
          stock={fireDetail.stock}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
