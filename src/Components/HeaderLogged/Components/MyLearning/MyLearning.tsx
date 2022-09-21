import styles from './MyLearning.module.css';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
interface Props {
    
}
const MyLearning: FC<Props> = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button className={styles.headerButtons} onClick={() => navigate("./mycourses")}>Mi aprendizaje</button>
        </div>
    )
}

export default MyLearning;