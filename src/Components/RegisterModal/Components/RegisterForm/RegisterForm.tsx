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
            setGlobalState({ ...globalState, modalState: {...globalState.modalState, isRegisterModalOpen: false }});
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
                <div>
                    <input type="text" placeholder="Nombre" className={styles.inputName} onChange={(e) => handleChangeName(e)}></input>
                    <input type="text" placeholder="Apellidos" className={styles.inputStyle} onChange={(e) => handleChangeSurname(e)}></input>
                </div>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" onChange={(e) => handleChangeEmail(e)} className={styles.inputStyle}></input>
                    {isFormSent && !isEmailValid && <p className={styles.invalid}>Invalid email</p>}
                    <InputPassword placeholder={"Crear Contrasena"} onChangePassword={handleChangePassword} />
                    <p className={styles.passwordInfo}>La contrasena debe tener al menos 8 caracteres</p>
                    <InputPassword placeholder={"Repetir Contrasena"} onChangePassword={handleChangeSecondPassword} />
                    {isFormSent && firstPassword.length < 8 && <p className={styles.invalid}>La contraseña tiene menos de 8 carácteres.</p>}
                    {isFormSent && firstPassword !== secondPassword && <p className={styles.invalid}>Las contraseñas deben coincidir.</p>}
                    <RegisterFormBtn handleClickSendRegister={handleSendForm}></RegisterFormBtn>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;