import styles from './MyCoursesPage.module.css';

const MyCoursesPage = () => {
    return (
        <div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>Mis cursos y guias</h3>
            </div>
            <div className={styles.textContainer}>
                <p>Aún no tienes ningún curso.</p>
                <h2 className={styles.text}>Empieza ahora a aprender!!</h2>
            </div>
        </div>
    )
}

export default MyCoursesPage; 