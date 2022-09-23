import AddInput from "../AddInput";
import styles from './AddTemary.module.css';
import Line from '../../../Line';

const AddTemary = () => {
    return (
        <div className={styles.addTemaryContainer}>
            <div className={styles.trashImage}></div>
            <div>
                <AddInput inputTitle={"Título del subtema"}></AddInput>
                <p className={styles.description}>Descripción</p>
                <input type="text" className={styles.descriptionInput}></input>
            </div>
            <line></line>
        </div>
    )
}

export default AddTemary;