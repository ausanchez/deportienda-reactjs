import React from 'react';
import { useState } from 'react';
import './itemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);
    const add = () =>{
        setCount(count + 1)
    }
    const rest = () =>{
        setCount(count - 1)
    }


    return (    
        <div id='item-count'>
            <div className='contador'>
                <button onClick={rest} disabled = {count === initial}>-</button>
                <h4>{count}</h4>
                <button onClick={add} disabled = {count === stock}>+</button>
            </div>
            <div className='agregar'>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>

        </div>
    );
}

export default ItemCount;
