import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductId } from "../api/productos";
import Counter from "../Components/Counter";
import { UseCartCont } from "../context/cartContext";
import { UserLayout } from "../Components/UserLayout";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { addProduct } = UseCartCont();

  useEffect(() => {
    getProductId(productId)
      .then((data) => {
        setProduct(data);
        //console.log(data);
      });
  }, [productId]);

  const handleAdd = (cant) => {
    addProduct(product, cant);
  }

  return (
    <UserLayout>
      <div className="infoDetail">
        <img src={product?.imagen} alt="" />
        <span>{product?.nombre}</span>
        <p>{product?.tag}</p>
        <h3>$ {product?.precio}</h3>
        <h4>Disponibles en Stock : {product?.stock}</h4>
        <Counter stock={product?.stock} onAdd={handleAdd} />
      </div>

    </UserLayout>
  );
};