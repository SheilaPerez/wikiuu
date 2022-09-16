import styles from './DescriptionTitle.module.css';
import StartNow from './Components/StartNow';

const DescriptionTitle = ({onClickOpenLogin}) => {

    return (
        <div className={styles.descriptionTitleContainer}>
            <div className={styles.titleSubtitle}>
                <h3 className={styles.title}>Cursos online con profesionales cualificados</h3>
                <p className={styles.subtitle}>Todo aquello que necesitas saber sobre la crianza. <br></br> Un nuevo camino donde cada paso es importante.</p>
                <StartNow handleClickOpenLoginModal={onClickOpenLogin}></StartNow>
            </div>
        </div>
    )
}

export default DescriptionTitle;