import styles from './InitalPage.module.css';
import OverviewInfo from './Components/OverviewInfo';
import VerticalLine from './Components/VerticalLine';
import LastStudentQuestion from './Components/LastStudentQuestion';

const InitialPage = () => {

    const studentsInfo = {
        activeStudents: {
            totalActiveStudents: 105,
            activeStudents: 40,
            viewsTime: 20,
            activesStudetsToday: 5
        }, curseViewers: {
            totalviews: 300,
            finished: 250
        }, averageAge: {
            women: 30,
            men: 35,
            totalAverage: 31
        }, averageStudyTime: {
            time: 20
        }
    };

    const moneyInfo = {
        wonMoney: {
            week: 300,
            month: 650,
            year: 1030
        }
    }

    return (
        <div className={styles.studentsContainer}>
            <h3 className={styles.principalTitle}>Alumnado</h3>
            <div className={styles.overviewInfoContainer}>
                <OverviewInfo title={"Total alumnos activos"} numbersInfo={studentsInfo.activeStudents.totalActiveStudents}></OverviewInfo>
                <VerticalLine></VerticalLine>
                <OverviewInfo title={"Alumnos activos"} numbersInfo={studentsInfo.activeStudents.activeStudents} subtitle={"Respecto al mes anterior"}></OverviewInfo>
                <VerticalLine></VerticalLine>
                <OverviewInfo title={"Tiempo de visualización"} numbersInfo={studentsInfo.activeStudents.viewsTime} subtitle={"horas por usuario"}></OverviewInfo>
                <VerticalLine></VerticalLine>
                <OverviewInfo title={"Alumnos activos hoy"} numbersInfo={studentsInfo.activeStudents.activesStudetsToday}></OverviewInfo>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <div className={styles.curseViewersContainer}>
                        <p className={styles.title}>Curso más visto</p>
                        <div className={styles.curseViewers}>
                            <div>
                                <div className={styles.videoImage}>IMAGEN VIDEO</div>
                                <p className={styles.titleVideo}>titulo video</p>         
                            </div>
                            <div className={styles.curseLine}></div>
                            <div className={styles.totalviews}>
                                <p className={styles.totalviewsInfo}>Total visualizaciones<br></br><span className={styles.viewsNums}>{studentsInfo.curseViewers.totalviews}</span></p>
                                <p className={styles.totalviewsInfo}>Filanizaciones<br></br><span className={styles.viewsNums}>{studentsInfo.curseViewers.finished}</span></p>
                            </div>
                        </div>
                    </div>
                    <LastStudentQuestion></LastStudentQuestion>
                </div>
                <div>
                    <div className={styles.avarageContainer}>
                        <p className={styles.title}>Media de edad de tus alumnos</p>
                        <div className={styles.ageContent}>
                            <div className={styles.avarageContent}>
                                <OverviewInfo numbersInfo={studentsInfo.averageAge.women} subtitle={"Mujeres"}></OverviewInfo>
                            </div>
                            <div className={styles.avarageContent}>
                                 <OverviewInfo numbersInfo={studentsInfo.averageAge.men} subtitle={"Hombres"}></OverviewInfo>
                            </div>
                            <div className={styles.avarageContent}>
                                <OverviewInfo numbersInfo={studentsInfo.averageAge.totalAverage} subtitle={"Total edad media"}></OverviewInfo>
                            </div>
                        </div>
                    </div>
                    <div className={styles.avarageContainer}>
                        <OverviewInfo title={"Tiempo de estudio medio al dia"} numbersInfo={studentsInfo.averageStudyTime.time} subtitle={"horas"}></OverviewInfo>
                    </div>
                </div>

            </div>
            <h3 className={styles.principalTitle}>Dinero</h3>
            <div className={styles.overviewInfoContainer}>
                <OverviewInfo title={"Dinero ganado esta semana"} numbersInfo={moneyInfo.wonMoney.week}></OverviewInfo>
                <VerticalLine></VerticalLine>
                <OverviewInfo title={"Dinero ganado este mes"} numbersInfo={moneyInfo.wonMoney.month}></OverviewInfo>
                <VerticalLine></VerticalLine>
                <OverviewInfo title={"Dinero ganado este año"} numbersInfo={moneyInfo.wonMoney.year}></OverviewInfo>
            </div>
            
        </div>
    )
}

export default InitialPage;