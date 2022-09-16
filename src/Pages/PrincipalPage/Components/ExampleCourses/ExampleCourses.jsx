import styles from './ExampleCourses.module.css';
import AnimationLetters from './Components/AnimationLetters';

const ExampleCourses = () => {
    return (
        <div className={styles.cursesExemplesContainer}>
            <p className={styles.cursosRelacionados}>Cursos relacionados con: </p>
            <AnimationLetters></AnimationLetters>
        </div>
    )
}

export default ExampleCourses;