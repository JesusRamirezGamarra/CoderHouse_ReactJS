import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

export const getDBProductList = async () => {
  const query = collection(db, "items");
  const response = await getDocs(query);
  const dataItems = response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return dataItems;
};

export const getDBProduct = async (id) => {
  const q = doc(db, "items", id);
  const response = await getDoc(q);
  const data = { id: response.id, ...response.data() };
  return data;
};
export const getDBProductStock = async (id) => {
  return await getDBProduct(id).then((response) => response.stock);
};

export const getDBCategory = async (category) => {
  const itemsRef = collection(db, "items");
  const qvalue = query(itemsRef, where("itemType", "==", category));
  const qkey = query(itemsRef, where(category, ">", 0));

  const querySnapshot =
    category !== "offer" ? await getDocs(qvalue) : await getDocs(qkey);

  const dataItems = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return dataItems;
};
export const getProductStock = async (id) => {
  const data = await getDBProduct(id);
  const prodStock = data.stock;
  return prodStock;
};
