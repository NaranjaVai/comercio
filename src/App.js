import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Category } from './pages/Category';
import { CarritoProvider } from './context/cartContext';
import { Cart } from './pages/Cart';
import {UserLayout} from './Components/UserLayout';

function App() {
  return (
    <div className="App">
      <CarritoProvider>
      <UserLayout>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category/:categoryId"} element={<Category />} />
          <Route path={"/product/:productId"} element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </UserLayout>
      </CarritoProvider>
    </div>
  );
}

export default App;
