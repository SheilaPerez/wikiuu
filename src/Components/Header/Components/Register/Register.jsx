import styles from './Register.module.css';

const Register = ({ handleClickModal }) => {
    return (
        <div>
            <button type="button" onClick={handleClickModal} className={styles.register}>Registro</button> 
        </div>
    )
}

export default Register;