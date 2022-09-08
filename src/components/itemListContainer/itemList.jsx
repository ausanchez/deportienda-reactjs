import React from 'react';
import Item from './item';

const ItemList = ({items}) => {
    return (
        <div>
        
        {items.map((item)=><Item key = {item.id} {...item}/>)}
        


        </div>
    );
}

export default ItemList;
