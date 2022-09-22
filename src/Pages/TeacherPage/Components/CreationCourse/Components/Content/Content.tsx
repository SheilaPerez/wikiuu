import styles from './Content.module.css';
import TitleSubtitle from '../TitleSubtitle';
import CheckboxInput from './Components/CheckboxInput';

const Content = () => {
    return (
        <div className={styles.contentContainer}>
            <TitleSubtitle title={"Contenido"} subtitle={"Elige las opciones que mas se ajusten. Estas saldrán en el perfil del curso. "}></TitleSubtitle>
            <div className={styles.allCheboxContainers}>
                <CheckboxInput labelText={'Tiene archivos adjuntos'}></CheckboxInput>
                <div className={styles.cheboxContainers}>
                    <CheckboxInput labelText={'Acceso limitado'}></CheckboxInput>
                    <select className={styles.select}>
                        <option value="15 dias">15 dias</option>
                        <option value="30 dias">30 dias</option>
                        <option value="60 dias">60 dias</option>
                    </select>
                </div>
                <div className={styles.cheboxContainers}>
                    <CheckboxInput labelText={'Tiempo de duración'}></CheckboxInput>
                    <input type="text" placeholder='por ejemplo, 2 horas' className={styles.durationInput}></input>
                </div>
                <div className={styles.cheboxContainers}>
                    <CheckboxInput labelText={'Curso recomendado para'}></CheckboxInput>
                    <input type="text" placeholder='por ejemplo, padres, maestras...' className={styles.recomendedInput}></input>
                </div>
                <CheckboxInput labelText={'Certificado de finalización (póximamente)'}></CheckboxInput>
            </div>
        </div>
    )
}

export default Content;