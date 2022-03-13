function Gallery(props){
    return (
        <div style={{ 'height': '100%' }}>
            <img src={props.objectImg} alt={props.title} width="60%" height="60%"/>
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;