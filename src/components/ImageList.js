import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = props => {
    
    const images= props.images.map(({description,id,urls}) => {
        return <img className="image-list" key={id} alt={description} src={urls.regular} />
    })

    return <div className="image-list">{images}</div>
}

export default ImageList