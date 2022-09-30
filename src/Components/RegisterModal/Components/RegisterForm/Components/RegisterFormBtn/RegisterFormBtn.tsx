import { FC } from 'react';
import styles from './RegisterFormBtn.module.css';

interface Props {
    handleClickSendRegister: () => void;
}
const RegisterFormBtn: FC<Props> = ({handleClickSendRegister}) => {
    return (
        <div>
            <button type="button" onClick={handleClickSendRegister} className={styles.register} role={'register-form-btn'}>Regístrate</button>
        </div>
    )
}

export default RegisterFormBtn;