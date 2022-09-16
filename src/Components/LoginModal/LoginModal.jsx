import styles from './LoginModal.module.css';
import GoogleRegisterBtn from '../GoogleRegisterBtn';
import RegisterLoginForm from './Components/RegisterLoginForm';
import ReactDOM from "react-dom"
import { useState, useContext } from 'react';
import GlobalContextModals from '../../Context/GlobalContextModals';


const LoginModal = ({ handleClickCloseLoginModal, handleClickRegister, handleClickCloseLoginBtn, handleClickForgetPassword }) => {

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal (
    <>
        <div className={styles.containerModal} onClick={handleClickCloseLoginModal}>
            <div className={styles.modal} onClick={stopPropagation}>
                <button type="button" className={styles.closeBtn} onClick={handleClickCloseLoginBtn}>X</button>
                <div className={styles.yellowContainer}>
                    <p className={styles.title}>Que bueno volver a verte en Wikiuu!</p>
                    <div className={styles.line}></div>
                    <p className={styles.subtitle}>Inicia sesión para acceder a tu cuenta.</p>
                </div>
                <div className={styles.registerContainer}>
                    <GoogleRegisterBtn></GoogleRegisterBtn>
                    <div className={styles.doubleBlackLineContainer}>
                        <div className={styles.doubleBlackLine}></div>
                        <p className={styles.o}>o</p>
                        <div className={styles.doubleBlackLine}></div>
                    </div>
                    <RegisterLoginForm></RegisterLoginForm>
                        <button className={styles.forguetPassword} onClick={handleClickForgetPassword}>Olvidaste la contraseña?</button>
                    <div className={styles.memberquestion}>
                        <p>Aún no eres miembro?</p>
                        <button type="button" onClick={handleClickRegister} className={styles.startSession}>Regístrate</button>
                    </div>
                </div>
            </div>
        </div>
    </>, document.getElementById("modalLogin_root")
    )
}

export default LoginModal;