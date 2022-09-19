import React from 'react';
import ItemCount from '../ItemCount/itemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const ItemDetail = ({id,title, description, precio, pictureUrl}) => { 
 
    const [mostrarCount, setMostrarCount] = useState(true);

    const onAdd = (count) => {
        const productoCarrito = {id: id, cantidad: count}
        console.log(productoCarrito)
        setMostrarCount(false)
    }


    return (
        <div id='item-detail'>
            <div id='portada'>
                <img src={pictureUrl} alt={title} />
            </div>
            <div id='data'>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>${precio}</h3>
                <h6>ID: {id}</h6>
             { mostrarCount ? <ItemCount stock ={15} initial ={1} onAdd ={onAdd}/> : <Link to={'/cart'}><button>Ir al carrito</button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail;
