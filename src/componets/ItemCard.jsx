import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ButtonContador } from '../containers/itemcount'
import { Link } from 'react-router-dom'



export const ItemCard = ({name, price, img}) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
            <Button variant="primary">Agregar</Button>
            <Link to={"/detalle/:productId"} >Ver Producto</Link>
            <Button variant="primary"><ButtonContador/></Button>
            </Card.Body>
        </Card>
   )
}