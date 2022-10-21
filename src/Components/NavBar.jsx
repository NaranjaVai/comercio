import Logo from '../Images/Logo.png';
import Cart from './CartWidget';

const NavBar = (props) => {
    return <header className="header">
        <img src={Logo} className='logoImg' alt='Logo'></img>
        <div>
                <h3>{props.titulo1}</h3>
                <h3>{props.titulo2}</h3>
                <h3>{props.titulo3}</h3>
                <h3>{props.titulo4}</h3>
                <Cart/>
        </div>
    </header>;
}

export default NavBar;