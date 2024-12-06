import styles from './button.module.css'

const Button = ({color}) =>{
    const {button} = styles;
    const colorStyles = styles[color];
    return <button className= {`${button} ${colorStyles}`}>Learn More</button>
};

export default Button;