import Card from 'react-bootstrap/Card'
import { ButtonContador } from '../containers/itemcount'
import { useState } from 'react'

export const ItemDetail = ({id, nombre, precio, img}) =>{

    const [carrito, setcarrito] = useState([])

    function onAdd(){
        setcarrito([...carrito, {nombre, precio, img}])
        console.log(carrito)
    }
      
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img} />
            <Card.Body>
                <Card.Text>
                    {id}
                </Card.Text>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {"$"+ precio}
                </Card.Text>            
                <ButtonContador onclick={onAdd}/>
            </Card.Body>
        </Card>
    )
}