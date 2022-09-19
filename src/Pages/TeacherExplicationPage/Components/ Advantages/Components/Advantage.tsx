import { FC } from 'react';
import styles from './Advantage.module.css';
interface Props {
    title: string;
    subtitle: string;
    subtitleClass: string;
}

const Advantge: FC<Props> = ({title, subtitle, subtitleClass}) => {
    return (
        <div>
            <div className={styles.advantage}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.lines}>- - - - -</p>
                <p className={subtitleClass}>{subtitle}</p>
            </div>
        </div>
    )
}

export default Advantge;