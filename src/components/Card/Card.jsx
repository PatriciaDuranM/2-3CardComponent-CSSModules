import styles from './card.module.css'

const Card =({children, color}) => {
    const {card} = styles;
    const colorClass = styles[color];
    return <div className={`${card} ${colorClass}` }> {children}</div>
}

export default Card;