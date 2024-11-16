import styles from './input.module.css'

const Input = ({fullwidth, placeholder}) => {
    return (
        <input 
            className={`${styles.input} ${fullwidth && styles.fullwidth}`} 
            placeholder={placeholder}
        />
    )
}


export default Input;