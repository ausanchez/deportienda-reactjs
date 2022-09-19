import { useState } from 'react';
import React,{ useEffect } from 'react';
import arrayProductos from '../../data/data';
import getArray from '../helpers/getArray';
import ItemList from './itemList';
import {useParams} from 'react-router-dom'
import './itemListContainer.css'

const ItemListContainer = ({}) => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const {categoryId} = useParams()


useEffect(() => {
    setLoading(true)
    getArray(arrayProductos)
    .then(res=> {
        categoryId ? setProducts(res.filter((item)=> item.category === categoryId)) : setProducts(res)
    })
    .catch(err=> console.log(err))
    .finally(() => setLoading(false))
}, [categoryId]);

return (
    <div id='items-container'>
        {
            loading ? <div>Cargando...</div> : <ItemList items ={products}/>
        }
    </div>
)
}


export default ItemListContainer;
