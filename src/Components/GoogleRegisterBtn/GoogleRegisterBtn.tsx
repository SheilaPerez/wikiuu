import styles from './GoogleRegisterBtn.module.css';
import { FcGoogle } from "react-icons/fc";

const GoogleRegisterBtn = () => {
    return (
        <div>
            <button type="button" className={styles.google}><FcGoogle className={styles.googleIcon}/> regístrate con google</button>
        </div>
    )
}

export default GoogleRegisterBtn;