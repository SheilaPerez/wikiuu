import { TbPencil } from "react-icons/tb";
import styles from './EditBtn.module.css';

const EditBtn = () => {
    return (
        <td className={styles.edit}>
            <button type="button" className={styles.editBtn}><TbPencil/></button>
        </td>
    )
}

export default EditBtn;