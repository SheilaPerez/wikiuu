import styles from './PreviewBtn.module.css';
import { TbEye } from "react-icons/tb";

const PreviewBtn = () => {

    return (
        <div>
            <button type="button" className={styles.previewBtn}><TbEye/> Previsualizar</button>
        </div>
    )
}

export default PreviewBtn;