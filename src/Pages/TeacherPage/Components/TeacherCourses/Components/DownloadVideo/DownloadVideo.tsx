import styles from './DownloadVideo.module.css';
import { useNavigate } from 'react-router-dom';

const DownloadVideo = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button type="button" className={styles.button} onClick={() => navigate("creationcourse")}>Subir curso</button>
        </div>
    )
}

export default DownloadVideo;