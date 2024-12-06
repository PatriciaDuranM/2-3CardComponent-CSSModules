import styles from './text.module.css'

const Text =({text}) =>{
    const {textPar} = styles
    return <p className={textPar}>{text}</p>

}

export default Text