import styles from './TrashBtn.module.css';
import { FcFullTrash } from "react-icons/fc";
const TrashBtn = () => {
    return (
        <td className={styles.trash}>
            <button type="button" className={styles.trashBtn}><FcFullTrash/></button>
        </td>
    )
}

export default TrashBtn;