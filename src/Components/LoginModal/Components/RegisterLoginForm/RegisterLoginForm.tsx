import styles from './RegisterLoginForm.module.css';
import StartSessionBtn from './Components/StartSessionBtn';
import { FC, useState, FormEvent} from 'react';

interface Props {

}

const RegisterLoginForm: FC<Props> = () => {
    const [email, setEmail] = useState('');

    const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    return (
        <div>
            <form>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" className={styles.inputStyle} onChange={(e) => handleChangeEmail(e)}></input>
                    <input type="text" placeholder="Contraseña" className={styles.inputStyle}></input>
                    <div className={styles.inputCheckContainer}>
                        <input type="checkbox" />
                        <label className={styles.passwordInfo}>Mantener iniciada la sesión hasta que la cierre</label>
                    </div>
                    <StartSessionBtn></StartSessionBtn>
                </div>
            </form>
        </div>
    )
}

export default RegisterLoginForm;