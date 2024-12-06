import styles from './image.module.css'


const Image = ({url}) =>{

    const {image} = styles;
    return <img className={image} src={url} alt="" />;

}

export default Image;