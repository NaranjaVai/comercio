import Logo from '../api/Images/Logo.png';
import {CartWidget} from './CartWidget';
import {Link,NavLink} from 'react-router-dom';
import { UseCartCont } from '../context/cartContext';

const links = ['Vinos','Cervezas','Whiskys','Aperitivos'];

export const NavBar = () => {
    const { getCant }= UseCartCont();
    return <header className="header">
        <Link to='/'>
        <img src={Logo} className='logoImg' alt='Logo'/>
        </Link>
        
        <div>
                <div>
                   {links.map((elem) => {
                        return(
                            <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "blue" : "#000000",
                                textDecoration: "none",
                              })}
                              to={`/category/${elem.toLowerCase()}`}
                              key={elem}>
                                {elem}                    
                            </NavLink>
                        );
                   })} 
                </div>
                <Link to='/cart'>
                <CartWidget/>{" "}
                <span>{getCant()}</span>
                </Link>
        </div>
    </header>;
}

