import { FC } from 'react';
import styles from './VideoInformation.module.css';
import TrashBtn from './Components/TrashBtn'; 
import EditBtn from './Components/EditBtn';

interface Props {
    title: string;
    views: number;
    studyng: number;
    graduate: number;
}
const VideoInformation: FC<Props> = ({title, views,studyng, graduate}) => {

    return (
        <tr>
            <td className={styles.subtitleInfoFirts}>
                <div className={styles.videoImage}></div>
            </td>
            <td className={styles.subtitleInfoTitle}>{title}</td>
            <td className={styles.subtitleInfo}>{views}</td>
            <td className={styles.subtitleInfo}>{studyng}</td>
            <td className={styles.subtitleInfo}>{graduate}</td>
            <TrashBtn></TrashBtn>
            <EditBtn></EditBtn>
        </tr>
                     
                     
    )
}

export default VideoInformation;