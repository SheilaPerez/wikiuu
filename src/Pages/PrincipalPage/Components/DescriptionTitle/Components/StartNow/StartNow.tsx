import styles from './StartNow.module.css';
import { FC } from 'react';
interface Props {
    handleClickOpenLoginModal: () => void;
}
const StartNow: FC<Props> = ({ handleClickOpenLoginModal }) => {
    return (
        <div>
            <button role="start-now-open-login" type="button" className={styles.startnowBtn} onClick={handleClickOpenLoginModal}>Empezar ahora</button>
        </div>
    )
}

export default StartNow;