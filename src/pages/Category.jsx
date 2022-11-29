import { ItemListContainer } from '../Components/ItemListContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductCategory} from '../api/productos';
import { UserLayout } from '../Components/UserLayout';

export const Category = () => { 
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      setProductos([])
      getProductCategory(categoryId)
        .then(items => setProductos(items) )
        .catch(e => console.log(e));
    }, [categoryId]);
  
    return (
            <UserLayout>
            <ItemListContainer productos={productos}/>
            </UserLayout>
            );        
};


