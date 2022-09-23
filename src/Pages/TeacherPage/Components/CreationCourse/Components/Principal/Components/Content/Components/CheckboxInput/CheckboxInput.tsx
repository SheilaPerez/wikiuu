import { FC } from 'react';
import styles from './CheckboxInput.module.css';
interface Props {
    labelText: string;
}
const CheckboxInput: FC<Props> = ({labelText}) => {
    return (
        <div>
            <input type="checkbox"></input>
            <label className={styles.label}>{labelText}s</label>
        </div>
    )
}

export default CheckboxInput;