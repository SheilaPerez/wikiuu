import { FC } from 'react';
import styles from './SendBtn.module.css';

interface Props {
    handleClickSendBtn: () => void;
}

const SendBtn: FC<Props> = ({handleClickSendBtn}) => {
    return (
        <div>
            <button type="button" role={'send-btn'} className={styles.send} onClick={handleClickSendBtn}>Enviar</button>
        </div>
    )
}

export default SendBtn;