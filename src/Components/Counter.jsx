import { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IoCartSharp } from 'react-icons/io5';


const Counter = ({ stock, onAdd }) => {

  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="counter" >
      <Button className='button1' onClick={() => handleAdd()}> {<AiOutlinePlus />} </Button>
      <span>{contador}</span>
      <Button className='button2' onClick={() => handleSubstract()}> {<AiOutlineMinus />} </Button>
      <Button className='button3' onClick={() => {
        if (contador) onAdd(contador)
      }}> {<IoCartSharp />} </Button>
    </div>
  );
};

export default Counter;
