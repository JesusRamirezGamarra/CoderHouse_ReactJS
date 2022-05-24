import { db } from "../utils/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDBProductList, getProductStock } from "./DBget";

export const writeCollection = async (collectionName, collectionData) => {
  const orderCollection = collection(db, collectionName);
  const docRef = await addDoc(orderCollection, collectionData);
  return docRef;
};

export const updateStock = (cart) => {
  cart.forEach(async (item) => {
    const stock = await getProductStock(item.id);
    const updatedStock = stock - item.count;
    const docRef = doc(db, "items", item.id);
    updateDoc(docRef, {
      stock: updatedStock,
    });
  });
};

/* Llamar cuando haya productos faltantes */
export const updateStockItems = async () => {
  const dataItems = await getDBProductList();
  dataItems.forEach(async (item) => {
    const docRef = doc(db, "items", item.id);
    updateDoc(docRef, {
      stock: "100",
    });
  });
};
