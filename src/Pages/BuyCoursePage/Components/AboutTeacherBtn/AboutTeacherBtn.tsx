import { FC } from 'react';
import styles from './AboutTeacherBtn.module.css';
interface Props {
    handleClickAboutTeacher: () => void;
}
const AboutTeacherBtn: FC <Props> = ({handleClickAboutTeacher}) => {

    return (
        <div>
            <button type="button" onClick={handleClickAboutTeacher} className={styles.aboutBtn}>sobre el creador</button>
        </div>
    )
}

export default AboutTeacherBtn;