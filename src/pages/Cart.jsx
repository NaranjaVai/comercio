import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseCartCont } from "../context/cartContext";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/productos";
import Button from "../Components/Button";


export const Cart = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { getTotal, cart, emptyCart} = UseCartCont();

    const createOrder = async () => {
        const items = cart.map (({ id, nombre, cant, precio}) => ({
            id,
            title: nombre,
            cant,
            price: precio,
        }));
        const order = {
            comprador: {name, phone, email},
            items,
            total: getTotal(),
        };
        const id = await addOrder(order);
        await updateManyProducts(items);
        emptyCart();
    };
    return (
        <div className="contenido">
            {cart.map ((p) =>(
            <div key={p.id}>
                <div> {p.nombre}</div>
                <div>Cantidad: {p.cant}</div>
            </div>))};
            <span>Total:$ {getTotal()}</span>
            <div>
                <span>Nombre</span>
                <input onChange={(e) => setName(e.target.value)} />
                <span>Direccion</span>
                <input onChange={(e) => setPhone(e.target.value)} />
                <span>Email</span>
                <input onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button onClick={createOrder}>Comprar</Button>

        </div>
    )







}
