import styles from './RegisterForm.module.css';
import RegisterFormBtn from './Components/RegisterFormBtn';
import validator from 'validator';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContextModals from '../../../../Context/GlobalContextModals';
import { useContext } from 'react';
import GlobalContextIsLogged from '../../../../Context/GlobalContextIsLogged';
import InputPassword from './Components/InputPassword';

const RegisterForm = () => {
    const [isFormSent, setFormSent] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const navigate = useNavigate();
    const { modalState, setModalState } = useContext(GlobalContextModals);
    const { isLogged, setIsLogged } = useContext(GlobalContextIsLogged);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setIsEmailValid(validator.isEmail(e.target.value));
    }

    const handleSendForm = () => {
        setFormSent(true);
        if (isEmailValid && firstPassword.length >= 8 && firstPassword === secondPassword) {
            setModalState({ ...modalState, isRegisterModalOpen: false });
            setIsLogged(true)
            navigate("/mycourses");
        }
    }

    const handleChangePassword = (e) => {
        setFirstPassword(e.target.value);
    }

    const handleChangeSecondPassword = (e) => {
        setSecondPassword(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Nombre" className={styles.inputName}></input>
                    <input type="text" placeholder="Apellidos" className={styles.inputStyle}></input>
                </div>
                <div className={styles.inputsContainer}>
                    <input type="text" placeholder="Dirección de correo electronico" onChange={(e) => handleChangeEmail(e)} className={styles.inputStyle}></input>
                    {isFormSent && !isEmailValid && <p className={styles.invalid}>Invalid email</p>}
                   
                    <InputPassword placeholder={"Crear Contrasena"} onChangePassword={handleChangePassword}/>
                    <p className={styles.passwordInfo}>La contrasena debe tener al menos 8 caracteres</p>
                    {isFormSent && firstPassword.length < 8 && <p className={styles.invalid}>La contraseña tiene menos de 8 carácteres.</p>}
                    <input type="text" placeholder="Repetir contraseña" onChange={(e) => handleChangeSecondPassword(e)} className={styles.inputStyle}></input>
                    {isFormSent && firstPassword !== secondPassword && <p className={styles.invalid}>Las contraseñas deben coincidir.</p>}
                    <RegisterFormBtn handleClickSendRegister={handleSendForm}></RegisterFormBtn>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;