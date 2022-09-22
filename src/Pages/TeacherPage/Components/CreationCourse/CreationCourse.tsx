import styles from './CreationCourse.module.css';
import PreviewBtn from './Components/PreviewBtn';
import SaveBtn from './Components/SaveBtn';
import Line from './Components/Line';
import InputText from './Components/InputText';
import Description from './Components/Description';
import Content from './Components/Content';
import Cover from './Components/Cover';

const CreationCourse = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.principalTitle}>Creación del curso</h3>
            <div className={styles.creationBtns}>
                <PreviewBtn></PreviewBtn>
                <SaveBtn></SaveBtn>
            </div>
            <div className={styles.creationStartBtns}>
                <button type="button" className={styles.principalBtn}>principal</button>
                <button type="button" className={styles.temariBtn}>temario</button>
            </div>
            <Line></Line>
            <InputText title={"Titulo del curso"}></InputText>
            <InputText title={"Subtitulo"}></InputText>
            <Line></Line>
            <Cover></Cover>
            <Line></Line>
            <Description></Description>
            <Line></Line>
            <Content></Content>
        </div>
    )
}

export default CreationCourse;                      