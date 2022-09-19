import { FC } from 'react';
import styles from './StartSessionBtn.module.css';

interface Props {
    
}

const StartSessionBtn: FC<Props> = () => {

    return (
        <div>
            <button type="button" className={styles.register}>Iniciar sesión</button>
        </div>
    )
}

export default StartSessionBtn;