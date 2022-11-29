import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductId } from "../api/productos";
import Counter from "../Components/Counter";
import { UseCartCont } from "../context/cartContext";
import { UserLayout } from "../Components/UserLayout";

export const Detail = () => {
  const {productId} = useParams();
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
    addProduct(product,cant);
  }

  return (
    <UserLayout>
      <div>
        <div className="infoDetail">       
        <span>{product?.nombre}</span>
        <p>{product?.tag}</p>
        <h2>{product?.categoria}</h2>
        <img src={product?.imagen} alt=""/>
        <h3>{product?.precio}</h3>
        <span>Disponibles en Stock : {product?.stock}</span>
        <Counter stock={product?.stock} onAdd={handleAdd}/>
        </div>
 
      </div>
      </UserLayout>
  );
};