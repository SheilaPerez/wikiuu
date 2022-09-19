import { FC } from 'react';
import styles from './SendBtn.module.css';

interface Props {

}

const SendBtn: FC<Props> = () => {
    return (
        <div>
            <button type="button" className={styles.send}>Enviar</button>
        </div>
    )
}

export default SendBtn;