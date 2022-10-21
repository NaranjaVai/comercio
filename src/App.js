import './App.scss';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer'; 


function App() {
  return (
    <div className="App">
      <NavBar titulo1='Vinos' titulo2='Cervezas' titulo3='Whiskys' titulo4='Aperitivos'/>

    <main>
    <ItemListContainer name1='Latitud 33' name2='Cerveza Pilsen' name3='Whisky' price1= '4000' price2= '5000' price3= '10000'/>
   
    </main>
    
    </div>
  );
}

export default App;
