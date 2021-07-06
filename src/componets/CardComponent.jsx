import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const CardComponet = ({name, price, img}) => {
    return(
        <Card Style={{ with: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {price}
                </Card.Text>
                <Button variant="Primary">Agregar</Button>
            </Card.Body>
        </Card>
    )
}