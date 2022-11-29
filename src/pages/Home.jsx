import {ItemListContainer} from '../Components/ItemListContainer';
import {UserLayout} from '../Components/UserLayout';
import { useEffect, useState } from "react";
import { getProductos } from '../api/productos';

export const Home = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      setProductos([])
      getProductos()
        .then(items => setProductos(items) )
        .catch(e => console.log(e));
    }, []);
  
    return (
        <main>
            <UserLayout>
            <ItemListContainer productos={productos}/>
            </UserLayout>
        </main>
    )


}