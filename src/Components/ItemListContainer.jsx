import img1 from '../Images/latitud.jpg';
import img2 from '../Images/pilsen.jpg';
import img3 from '../Images/whisky.png';


const ItemListContainer = (greeting) =>{
    return <div className="itemContainer">
        <div> <img src={img1} alt="" /> <h3>{greeting.name1}</h3> <h4>{greeting.price1}</h4> </div>
        <div> <img src={img2} alt="" /> <h3>{greeting.name2}</h3> <h4>{greeting.price2}</h4></div>
        <div> <img src={img3} alt="" /> <h3>{greeting.name3}</h3> <h4>{greeting.price3}</h4></div>
    </div>;

}

export default ItemListContainer;