import styles from './cardContainer.module.css'

const CardContainer =({children}) => {
    const {cardContainer} = styles;
    return <div className={cardContainer}>{children}</div>
}

export default CardContainer;