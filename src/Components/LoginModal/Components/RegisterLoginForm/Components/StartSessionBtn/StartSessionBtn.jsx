import styles from './StartSessionBtn.module.css';

const StartSessionBtn = ({handleClickStartSession}) => {

    return (
        <div>
            <button type="button" className={styles.register}>Iniciar sesión</button>
        </div>
    )
}

export default StartSessionBtn;