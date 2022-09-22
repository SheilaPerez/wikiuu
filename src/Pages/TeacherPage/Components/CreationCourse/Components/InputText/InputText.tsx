import { FC } from 'react';
import styles from './InputText.module.css';
interface Props {
    title: string;
}
const InputText: FC<Props> = ({title}) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.title}>{title}</label>
            <input type="text" className={styles.input}></input>
        </div>
    )
}

export default InputText;