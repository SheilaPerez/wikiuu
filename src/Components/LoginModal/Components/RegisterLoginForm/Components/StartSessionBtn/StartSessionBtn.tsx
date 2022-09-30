import { FC } from 'react';
import styles from './StartSessionBtn.module.css';

interface Props {
    handleClickStartSessionBtn: () => void;
}

const StartSessionBtn: FC<Props> = ({handleClickStartSessionBtn}) => {

    return (
        <div>
            <button type="button" role={"startSession-clicked"} className={styles.register} onClick={handleClickStartSessionBtn}>Iniciar sesión</button>
        </div>
    )
}

export default StartSessionBtn;