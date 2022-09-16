import styles from './RegisterFormBtn.module.css';

const RegisterFormBtn = ({handleClickSendRegister}) => {
    return (
        <div>
            <button type="button" onClick={handleClickSendRegister} className={styles.register}>Regístrate</button>
        </div>
    )
}

export default RegisterFormBtn;