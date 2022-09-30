import { FC } from 'react';
import styles from './ContentBtn.module.css';
interface Props {
    handleClickContentBtn: () => void;
}
const ContentBtn: FC<Props> = ({handleClickContentBtn}) => {
    return (
        <div>
            <button type="button" className={styles.contentBtn} onClick={handleClickContentBtn}>contenido</button>
        </div>
    )
}

export default ContentBtn;