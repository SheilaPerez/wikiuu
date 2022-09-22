import styles from './TeacherCourses.module.css';
import VideoInformation from './Components/VideoInformation';
import DownloadVideo from './Components/DownloadVideo';

const TeacherCourses = () => {
    const videoInfo = {
        title: "titulo del curso",
        views: 234,
        studying: 34,
        graduate: 50
    }

    return (
        <div className={styles.coursesContainer}>
            <h3 className={styles.principalTitle}>Mis cursos</h3>
            <DownloadVideo></DownloadVideo>
            <table className={styles.table}>
                <tr className={styles.subtitlesContainer}>
                    <th className={styles.subtitleFirts}>carátula</th>
                    <th className={styles.subtitle}>título</th>
                    <th className={styles.subtitle}>visualizaciones</th>
                    <th className={styles.subtitle}>Cursando</th>
                    <th className={styles.subtitle}>Graduados</th>
                </tr>
                <tr className={styles.spacer}>
                </tr>
                <VideoInformation title={videoInfo.title} views={videoInfo.views} studyng={videoInfo.studying} graduate={videoInfo.graduate}></VideoInformation>
                <VideoInformation title={videoInfo.title} views={videoInfo.views} studyng={videoInfo.studying} graduate={videoInfo.graduate}></VideoInformation>
            </table>
        </div>
    )
}

export default TeacherCourses;