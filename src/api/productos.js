import { db } from './config';
import {
  collection,
  getDocs,
  getDoc,
  where,
  doc,
  query,
  updateDoc,
  writeBatch,
  increment,
  deleteDoc
} from 'firebase/firestore';

const productsRef = collection(db, 'items');

export const getProductos = async () => {
  const products = []; 

  const querySnapshot = await getDocs(productsRef);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id })
  })
  return products;
};


export const getProductCategory = async (category) => {
  const productos = [];
  const q = query(productsRef, where("categoria", "==", category)) //query para buscar , y el where:primer parametro es el campo de items categoria de firebase, segundo el comparador , ultimo parametro lo que le pasamos nosotros), el where es similar al map
  const querySnapshot = await (getDocs(q));

  querySnapshot.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id })
  })
  return productos
}




export const getProductId = async (productId) => {
  const document = doc(db, 'items', productId);
  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const updateProduct = async (id, item) => {
  const productDoc = await updateDoc(doc(db, 'items', id), item);
  return
}

export const updateManyProducts = async (items) => {
  const batch = writeBatch();
  items.forEach(({ id, cant }) => {
    const docRef = doc(db, 'items', id)
    batch.update(docRef, { stock: increment(-cant) })
  })
  batch.commit();
}

export const deleteProduct = async (id) => {
  const docRef = doc(db, 'items'.id);
  const elem = await deleteDoc(docRef);
}




