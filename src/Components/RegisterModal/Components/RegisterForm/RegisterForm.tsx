import styles from './RegisterForm.module.css';
import RegisterFormBtn from './Components/RegisterFormBtn';
import validator from 'validator';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../../../Context/GlobalContext';
import InputPassword from './Components/InputPassword';
import { FC } from 'react';
interface Props {

}

const RegisterForm: FC<Props> = () => {
    const [isFormSent, setFormSent] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const navigate = useNavigate();
    const { globalState, setGlobalState } = useContext(GlobalContext);

    const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setIsEmailValid(validator.isEmail(e.currentTarget.value));
    }

    const handleSendForm = () => {
        setFormSent(true);
        if (isEmailValid && firstPassword.length >= 8 && firstPassword === secondPassword) {
            setGlobalState({isLogged: true, modalState: { ...globalState.modalState, isRegisterModalOpen: false }});
            navigate("/mycourses");
        }
    }

    const handleChangePassword = (e: FormEvent<HTMLInputElement>) => {
        setFirstPassword(e.currentTarget.value);
    }

    const handleChangeSecondPassword = (e: FormEvent<HTMLInputElement>) => {
        setSecondPassword(e.currentTarget.value);
    }

    const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleChangeSurname = (e: FormEvent<HTMLInputElement>) => {
        setSurname(e.currentTarget.value)
    }

    return (
        <div>
            <form>
                <div className={styles.nameContainer}>
                    <div>
                        <input role={'input-name'} type="text" placeholder="Nombre" className={styles.inputName} onChange={(e) => handleChangeName(e)}></input>
                        {isFormSent && name.length <= 0 && <p className={styles.invalid}>Este campo es obligatorio</p>}
                    </div>
                    <div>
                        <input role={'input-surname'} type="text" placeholder="Apellidos" className={styles.inputStyle} onChange={(e) => handleChangeSurname(e)}></input>
                        {isFormSent && surname.length <= 0 && <p className={styles.invalid}>Este campo es obligatorio</p>}
                    </div>
                </div>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" onChange={(e) => handleChangeEmail(e)} className={styles.inputStyle}></input>
                    {isFormSent && !isEmailValid && <p className={styles.invalid} role={'email-error'}>Invalid email</p>}
                    <InputPassword placeholder={"Crear Contrasena"} onChangePassword={handleChangePassword} />
                    <p className={styles.passwordInfo}>La contrasena debe tener al menos 8 caracteres</p>
                    {isFormSent && firstPassword.length < 8 && <p className={styles.invalid} role={'password-error'}>La contraseña tiene menos de 8 carácteres.</p>}
                    <InputPassword role={"password-repeat-input"} placeholder={"Repetir Contrasena"} onChangePassword={handleChangeSecondPassword} />
                    {isFormSent && firstPassword !== secondPassword && <p className={styles.invalid} role={'same-password-error'}>Las contraseñas deben coincidir.</p>}
                    <RegisterFormBtn handleClickSendRegister={handleSendForm}></RegisterFormBtn>
                </div>
            </form>
        </div>  
    )
}

export default RegisterForm;