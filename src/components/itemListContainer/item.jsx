import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const Item = ({id, title, description, precio, pictureUrl}) => {
    return (
       <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h6>Precio $ {precio}</h6>
            <Button variant="primary">
                <Link to = {`/item/${id}`} className='button-detail'>
                    Ver mas info
                </Link>
            </Button>
      </Card.Body>
    </Card>
    </div>
    );
}

export default Item;
