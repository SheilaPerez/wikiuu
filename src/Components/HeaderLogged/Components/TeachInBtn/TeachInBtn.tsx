import styles from './TeachInBtn.module.css';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    
}
const TeachInBtn: FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button className={styles.headerButtons} onClick={() => navigate("./teacherpage")}>Enseñar en Wikiuu</button>
        </div>
    )
}

export default TeachInBtn;