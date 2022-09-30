import { FC } from 'react';
import styles from './Register.module.css';

interface Props {
    handleClickModal: () => void;
}

const Register: FC<Props> = ({ handleClickModal }) => {
    return (
        <div>
            <button type="button" onClick={handleClickModal} role={"register-open-modal"} className={styles.register}>Registro</button> 
        </div>
    )
}

export default Register;