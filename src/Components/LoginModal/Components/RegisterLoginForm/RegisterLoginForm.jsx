import styles from './RegisterLoginForm.module.css';
import StartSessionBtn from './Components/StartSessionBtn';

const RegisterLoginForm = () => {
    return (
        <div>
            <form>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" className={styles.inputStyle}></input>
                    <input type="text" placeholder="Contraseña" className={styles.inputStyle}></input>
                    <div className={styles.inputCheckContainer}>
                        <input type="checkbox" />
                        <lable className={styles.passwordInfo}>Mantener iniciada la sesión hasta que la cierre</lable>
                    </div>
                    <StartSessionBtn></StartSessionBtn>
                </div>
            </form>
        </div>
    )
}

export default RegisterLoginForm;