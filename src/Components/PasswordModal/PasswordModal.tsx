import styles from './PasswordModal.module.css';
import ReactDOM from "react-dom"
import SendBtn from './Components/SendBtn';
import { FC, FormEvent, useState } from 'react';
import validator from 'validator';

interface Props {
    handleClosePassModalBtn: () => void;
    handleClickClosePassModal: () => void;
}

const PasswordModal: FC<Props> = ({ handleClosePassModalBtn, handleClickClosePassModal }) => {
    const [email, setEmail] = useState('');
    const [clickedSend, setClickedSend] = useState<Boolean>(false);
    const [emailValid, setEmailValid] = useState<Boolean>(false);

    const stopPropagation = (e: any) => {
        e.stopPropagation();
    }

    const handleChangeWriteEmail = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        console.log('valid', emailValid);
        setEmailValid(validator.isEmail(e.currentTarget.value));
    }

    const clickSendBtn = () => {
        setClickedSend(true);
    }

    return ReactDOM.createPortal(
        <div role={"password-modal"}> 
            <div className={styles.containerModal} onClick={handleClickClosePassModal}>
                <div className={styles.modal} onClick={stopPropagation}>
                    <button className={styles.closeBtn} type="button" onClick={handleClosePassModalBtn}>X</button>
                    <div className={styles.yellowContainer}>
                        <p className={styles.title}>recupera tu contraseña</p>
                        <div className={styles.line}></div>
                        <p className={styles.subtitle}>Sigue las instrucciones que enviaremos a tu correo electronico.</p>
                    </div>
                    <div className={styles.inputContainer}>
                        <p className={styles.text}>Escribe tu correo electronico aquí:</p>
                        <input type="text" placeholder="Dirección de correo electronico" onChange={(e) => handleChangeWriteEmail(e)} className={styles.inputStyle}></input>
                        {clickedSend && !emailValid && <p role={'email-getBack-password-error'} className={styles.invalid}>La dirección de email no existe</p>}
                        <SendBtn handleClickSendBtn={clickSendBtn}></SendBtn>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modalPassword_root")!
    )
}

export default PasswordModal;