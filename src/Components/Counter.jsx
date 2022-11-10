import { useState, useEffect } from "react";
import Button from "./Button";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
import IoCartSharp from 'react-icons/io';


const Counter = ({ stock, onAdd }) => {

  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if(contador < stock){
    setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if(contador > 0) setContador(contador - 1);
  };

  return (
    <div className="products" >
      <Button onClick={() => handleAdd()}> {<AiOutlinePlus/>} </Button>
      <span>{contador}</span>
      <Button onClick={() => handleSubstract()}> {<AiOutlineMinus/>} </Button>
      <Button onClick={() => {
       if(contador) onAdd()     
        }}> {<IoCartSharp/>} </Button>
    </div>
  );
};

export default Counter;
