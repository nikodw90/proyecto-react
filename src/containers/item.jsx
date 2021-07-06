

export const itemList = ( { id, titlle, image}) => {
    return(
        <div>
            {titlle}
            <img src={ image } alt={title} />
        </div>
    )
}
export default Item