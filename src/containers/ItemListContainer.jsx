import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { ItemList } from "./itemList";
import "./style.css";

export const ItemListContainer = ({ fireItems }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  

  useEffect(() => {

    if(categoryId){

    const db = firestore;
    const collection = db.collection('products');
    const query = collection.where('categories', "==", categoryId).get();
    query.then((result) => {
      setItems(result.docs.map((p) => ({ id: p.id, ...p.data() })));
    });

    }

    setItems(fireItems);
    

  }, [categoryId, fireItems]);

  return (
    <div className="card">
      {fireItems.length > <ItemList productos={items} />}
    </div>
  );
};

export default ItemListContainer;
