import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";

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

    <div className="card">
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
