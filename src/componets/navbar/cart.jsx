import { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import { ShopProvider } from '../cartContex'


export const cart = () =>{

    const {borrar, anadir} = useContext (ShopProvider)

    const {nombre, precio,} = anadir

    retur(
        <div>


          <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{precio}</Card.Subtitle>
                 <Card.Link href="#">ir a comprar</Card.Link>
            <Card.Link href="#">{borrar}</Card.Link>
            </Card.Body>
                </Card>
        </div>
    )

}