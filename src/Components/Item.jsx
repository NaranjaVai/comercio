import { useNavigate } from "react-router-dom";
import { UseCartCont } from "../context/cartContext";
import { MdOutlineDone } from 'react-icons/md';


const Item = ({ id, imagen, nombre, categoria, tag, precio, stock }) => {
    const navigate = useNavigate();
    const { addProduct } = UseCartCont();
    return (<div className="card"
        onClick={() => navigate(`/product/${id}`)}>
        <div className="card__top">
            <img src={imagen} alt="bebida" />
        </div>
        <div className="card__bottom">
            <h2>{nombre}</h2>
            <h2>{categoria}</h2>
            <h3>${precio}</h3>
            <h4>{tag} </h4>
            <h4>Disponibles: {stock}</h4>
            <button onClick={(e) => {
                e.stopPropagation();
                addProduct({ id, nombre, precio, categoria, tag, imagen, stock }, 1)
            }}>Add to Cart   <MdOutlineDone /> </button>
        </div>
    </div>);
};

export default Item;