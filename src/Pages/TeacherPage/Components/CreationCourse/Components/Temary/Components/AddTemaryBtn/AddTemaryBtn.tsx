import { FaCreativeCommonsShare } from "react-icons/fa";
import styles from './AddTemaryBtn.module.css';

const AddTemaryBtn = () => {
    return (
        <div>
            <button type="button" className={styles.addBtn}><span className={styles.icon}><FaCreativeCommonsShare/></span>Añadir temario</button>
        </div>
    )
}

export default AddTemaryBtn;