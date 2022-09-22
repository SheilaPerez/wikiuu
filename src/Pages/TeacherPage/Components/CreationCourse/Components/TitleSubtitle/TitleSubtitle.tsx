import { FC } from 'react';
import styles from './TitleSubtitle.module.css';
interface Props {
    title: string;
    subtitle?: string;
}

const TitleSubtitle: FC<Props> = ({title, subtitle}) => {
    return (
        <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

export default TitleSubtitle;