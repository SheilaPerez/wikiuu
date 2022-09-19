import styles from './TeacherExplication.module.css';
import KnowMoreBtn from './Components/KnowMoreBtn';
import { FC } from 'react';
interface Props {

}
const TeacherExplication: FC<Props> = () => {
    return (
        <div className={styles.teacherContainer}>
            <div className={styles.teacherExplicationContainer}>
                <div className={styles.image}>
                </div>
                <div>           
                    <h4 className={styles.title}>Elegirnos para formar</h4>
                    <div className={styles.line}></div>
                    <p className={styles.subtitle}>Cuelga tus videos, complementalos con guias, ayuda a tus alumnos en sus dudas con un foro donde poder contestar cuando mejor te vaya. <br></br>
                            <br></br>Date a conocer creando tu perfil, explicando tus estudios y experiencia. Incluye tus redes sociales.<br></br>
                            <br></br>Ten información de primera mano de cuanta gente a comprado tu curso, estadisticas de las ventas, en que ciudades hay mas visualizaciones,etc.</p>
                <KnowMoreBtn></KnowMoreBtn>
                </div>     
            </div>
        </div>
    )
}

export default TeacherExplication;