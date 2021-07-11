import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ButtonContador } from '../containers/itemcount'

export const ItemDetail = ({nombre, precio, img}) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
            <Button variant="primary">Agregar</Button>
            <Button variant="primary"><ButtonContador/></Button>
            </Card.Body>
        </Card>
    )
}