import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductId } from "../api/productos";
import { UserLayout } from "../Components/UserLayout";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductId(productId)
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [productId]);



  return (
    <UserLayout>
      <div>

        {product.nombre}
        {product.tag}
        {product.categoria}
        <img src={product.imagen} alt="" />
        {product.precio}

      </div>
    </UserLayout>
  );
};