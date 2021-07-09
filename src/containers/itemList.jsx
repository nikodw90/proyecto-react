import Item from './item.jsx'


export function ItemList( { items }) {
    return(
        <div className='itemList'>

            {items.map( items => <Item key={items.id} id={items.id}
            title={items.title} image={items.thumbnail} /> )
        }
        </div>
    )
}

export default ItemList