import './App.scss';
import  {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home'; 
import {Detail } from './pages/Detail'; 
import {Category} from './pages/Category';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route index element={<Home />} />
            <Route path={"/category/:categoryId"} element={<Category/>} />
            <Route path={"/product/:productId"} element={<Detail/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
