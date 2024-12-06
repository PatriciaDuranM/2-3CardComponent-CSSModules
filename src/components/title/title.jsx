
import styles from './title.module.css'

const Title = ({text}) =>{
    const {title} = styles;
    return <h2 className={title}>{text}</h2>;
}

export default Title;