import { FC } from 'react';
import styles from './Login.module.css';

interface Props {
    handleClickOpenLoginModal: () => void;
}

const Login: FC<Props> = ({ handleClickOpenLoginModal }) => {
    return (
        <div>
           <button className={styles.login} onClick={handleClickOpenLoginModal}>Login</button>  
        </div>
    )
}

export default Login;