import Item from "./Item";

export const ItemListContainer = ({productos}) =>{
    
    return (
      <div className="products">
        {productos.map((producto) => {
          return (
            <Item 
              key={producto.id}
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              categoria={producto.categoria}
              tag={producto.tag}
              precio={producto.precio}
              stock={producto.stock}
            />
          );
        })}
      </div>
    );
  };

