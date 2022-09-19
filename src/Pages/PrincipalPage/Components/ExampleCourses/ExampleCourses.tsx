import styles from './ExampleCourses.module.css';
import AnimationLetters from './Components/AnimationLetters';
import { FC } from 'react';
interface Props {
    
}
const ExampleCourses: FC<Props> = () => {
    return (
        <div className={styles.cursesExemplesContainer}>
            <p className={styles.cursosRelacionados}>Cursos relacionados con: </p>
            <AnimationLetters></AnimationLetters>
        </div>
    )
}

export default ExampleCourses;