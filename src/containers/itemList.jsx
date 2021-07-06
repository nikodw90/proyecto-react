import Item from './item.jsx'


function ItemList( { items }) {
    return(
        <div className='itemList'>

            {items.map( item => <Item key={items.id} id={items.id}
            title={items.title} image={items.thumbnail} /> )
        }
        </div>
    )
}

export default ItemList