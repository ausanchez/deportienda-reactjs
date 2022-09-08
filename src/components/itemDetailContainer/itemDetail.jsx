import React from 'react';

const ItemDetail = ({title, description, precio, pictureUrl}) => {
    return (
        <div id='item-detail'>
            <div id='portada'>
                <img src={pictureUrl} alt={title} />
            </div>
            <div id='data'>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>${precio}</h3>
            </div>
        </div>
    );
}

export default ItemDetail;
