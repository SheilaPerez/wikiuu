import styles from './KnowMoreBtn.module.css';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {

}
const KnowMoreBtn: FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button className={styles.knowMoreBtn} onClick={() => navigate("/teachers")}>Saber más</button>
        </div>
    )
}

export default KnowMoreBtn;