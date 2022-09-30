import styles from './RegisterLoginForm.module.css';
import StartSessionBtn from './Components/StartSessionBtn';
import { FC, useState, FormEvent} from 'react';

interface Props {

}

const RegisterLoginForm: FC<Props> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [startSessionClicked, setStartSessionClicked] = useState(false);

    const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const handleChangePassword = (e: FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    return (
        <div>
            <form>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" role={"email-input"} className={styles.inputStyle} onChange={(e) => handleChangeEmail(e)}></input>
                    {startSessionClicked && email.length <= 0 && <p role={"email-input-error"}>El campo email es obligatorio</p>} 
                    <input type="text" placeholder="Contraseña" role={"password-input"} className={styles.inputStyle} onChange={(e) => handleChangePassword(e)}></input>
                    {startSessionClicked && password.length <= 0 && <p role={"password-input-error"}>El campo contraseña es obligatorio</p>} 
                    <div className={styles.inputCheckContainer}>
                        <input type="checkbox" />
                        <label className={styles.passwordInfo}>Mantener iniciada la sesión hasta que la cierre</label>
                    </div>
                    <StartSessionBtn handleClickStartSessionBtn={() => setStartSessionClicked(true)}></StartSessionBtn>
                </div>
            </form>
        </div>
    )
}

export default RegisterLoginForm;