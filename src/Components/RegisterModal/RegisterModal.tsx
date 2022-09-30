import styles from './RegisterModal.module.css';
import ReactDOM from "react-dom"
import GoogleRegisterBtn from '../GoogleRegisterBtn';
import RegisterForm from './Components/RegisterForm';
import { FC } from 'react';

interface Props {
    handleClickCloseModal: () => void;
    handleClickStartSession: () => void;
    handleClickCloseModalBtn: () => void;
}
const RegisterModal: FC<Props> = ({ handleClickCloseModal, handleClickStartSession, handleClickCloseModalBtn }) => {
    const stopPropagation = (e: any) => {
        e.stopPropagation();
    }
    
    return ReactDOM.createPortal(
    <>
        <div className={styles.containerModal} onClick={handleClickCloseModal} role={"register-modal"}>
            <div className={styles.modal} onClick={stopPropagation}>
                <button className={styles.closeBtn} type="button" onClick={handleClickCloseModalBtn}>X</button>
                <div className={styles.yellowContainer}>
                    <p className={styles.title}>únete a wikiuu gratis</p>
                    <div className={styles.line}></div>
                    <p className={styles.subtitle}>Empieza a aprender todo lo que necesitas sobre crianza.</p>
                </div>
                <div className={styles.registerContainer}>
                    <GoogleRegisterBtn></GoogleRegisterBtn>
                    <div className={styles.doubleBlackLineContainer}>
                        <div className={styles.doubleBlackLine}></div>
                        <p className={styles.o}>o</p>
                        <div className={styles.doubleBlackLine}></div>
                    </div>
                        <RegisterForm></RegisterForm>
                    <div className={styles.memberquestion}>
                        <p>Ya eres miembro?</p>
                            <button className={styles.startSession} onClick={handleClickStartSession}>Iniciar sesión</button>
                    </div>
                    <p className={styles.textRegisterConditions}>Al registrarte, aceptas los Términos de servicio y Política de privacidad de Skillshare. Esta página está protegida por reCAPTCHA y está sujeta a los Términos del Servicio y la Política de Privacidad de Google.</p>        
                </div>
            </div>
        </div>
    </>, document.getElementById("modal_root")!)
}

export default RegisterModal;