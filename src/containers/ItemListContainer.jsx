import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { ItemList } from "./itemList";
import "./style.css";

export const ItemListContainer = ({ fireItems }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const db = firestore;
      const collection = db.collection("Products");
      const query = collection.where("categories", "==", categoryId).get();
      query.then((result) => {
        setItems(result.docs.map((p) => ({ id: p.id, ...p.data() })));
        
      });
    } else {
      setItems(fireItems);
    }
    
  }, [categoryId, fireItems]);

  return (

    <div className="card">{items.length > 0 ? <ItemList productos={items} /> : <h3>...Loading </h3> }</div>
  );
};

export default ItemListContainer;
