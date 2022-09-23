import { FC } from 'react';
import styles from './AddInput.module.css';
interface Props {
    inputTitle: string;
}

const AddInput: FC<Props> = ({inputTitle}) => {
    return (
        <div>
            <p className={styles.titleInput}>{inputTitle}</p>
            <input type='text' className={styles.addTitleInput}></input>    
        </div>
    )
}

export default AddInput;