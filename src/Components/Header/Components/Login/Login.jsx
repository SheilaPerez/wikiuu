import styles from './Login.module.css';

const Login = ({ handleClickOpenLoginModal }) => {
    return (
        <div>
           <button className={styles.login} onClick={handleClickOpenLoginModal}>Login</button>  
        </div>
    )
}

export default Login;