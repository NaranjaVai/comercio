import {NavBar} from './NavBar';
import {Footer} from './Footer';


export const UserLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>


    )
}