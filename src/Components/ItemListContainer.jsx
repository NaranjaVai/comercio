import { useEffect, useState } from "react";
import Item from "./Item";
import {useParams} from "react-router-dom";
import { getProductos } from "../api/productos";



export const ItemListContainer = () =>{
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      setProductos([])
      getProductos(categoryId)
        .then(items => setProductos(items) )
        .catch(e => console.log(e));
    }, [categoryId]);
  
    return (
      <div className="products">
        {productos.map((producto) => {
          return (
            <div className='products_item'>
            <Item 
              key={producto.id}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              categoria={producto.categoria}
              tag={producto.tag}
              precio={producto.precio}
            />
            </div>
          );
        })}
      </div>
    );
  };

