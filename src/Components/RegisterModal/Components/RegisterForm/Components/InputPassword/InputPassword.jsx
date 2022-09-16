import styles from "./InputStyle.module.css"

const InputPassword = ({ placeholder, onChangePassword }) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={(e) => onChangePassword(e)} className={styles.inputStyle}></input>
            <div></div>
        </div>
    )
}

export default InputPassword