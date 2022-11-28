import { ItemListContainer } from '../Components/ItemListContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductos } from '../api/productos';

export const Category = () => { 
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      setProductos([])
      getProductos(categoryId)
        .then(items => setProductos(items) )
        .catch(e => console.log(e));
    }, [categoryId]);
  
    return (
            <ItemListContainer productos={productos}/>
            );        
};


