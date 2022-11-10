import {ItemListContainer} from '../Components/ItemListContainer';
import { UserLayout } from '../Components/UserLayout';

export const Home = () => {
    return (
        <main>
            <UserLayout>
            <ItemListContainer/>
            </UserLayout>
        </main>
    )


}