import styles from './StartNow.module.css';

const StartNow = ({handleClickOpenLoginModal}) => {
    return (
        <div>
            <button type="button" className={styles.startnowBtn} onClick={handleClickOpenLoginModal}>Empezar ahora</button>
        </div>
    )
}

export default StartNow;