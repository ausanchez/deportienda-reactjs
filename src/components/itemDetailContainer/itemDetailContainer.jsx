import React, { useEffect } from 'react';
import getArray from '../helpers/getArray';
import arrayProductos from '../../data/data';
import { useState } from 'react';
import ItemDetail from './itemDetail';
import './itemDetailContainer.css'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()
    useEffect(() => {
        getArray(arrayProductos)
        .then(res => {
            const item = res.find((item) => item.id === Number(itemId))
            setProduct(item)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [itemId]);
    
    return (
        <div id='item-detail-container'>
            {
                loading ? <div>Cargando...</div> : <ItemDetail {...product}/>
            }
        </div>
    );
}

export default ItemDetailContainer;
