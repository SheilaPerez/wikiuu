import styles from './PasswordModal.module.css';
import ReactDOM from "react-dom"
import SendBtn from './Components/SendBtn';

const PasswordModal = ({ handleClosePassModalBtn, handleClickClosePassModal }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <>
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
                        <input type="text" placeholder="Dirección de correo electronico" className={styles.inputStyle}></input>
                        <SendBtn></SendBtn>
                    </div>
                </div>
            </div>
        </>, document.getElementById("modalPassword_root")
    )
}

export default PasswordModal;