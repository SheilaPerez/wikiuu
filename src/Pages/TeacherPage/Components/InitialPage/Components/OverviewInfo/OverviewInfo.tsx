import { FC } from 'react';
import styles from './OverviewInfo.module.css';
interface Props {
    title?: string;
    numbersInfo: number;
    subtitle?: string;
}

const OverviewInfo: FC<Props> = ({title, numbersInfo, subtitle}) => {
    return (
        <div>
            <p className={styles.studentsInfo}>{title}</p>
            <p className={styles.numsInfo}>{numbersInfo}</p>
            <p className={styles.studentsInfo}>{subtitle}</p>
        </div>
    )
}

export default OverviewInfo;