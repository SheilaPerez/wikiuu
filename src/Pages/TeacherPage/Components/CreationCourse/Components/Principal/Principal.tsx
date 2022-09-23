import styles from './Principal.module.css';
import Line from '../Line';
import InputText from './Components/InputText';
import Description from './Components/Description';
import Content from './Components/Content';
import Cover from './Components/Cover';
const Principal = () => {
    return (
        <div>
            <Line></Line>
            <InputText title={"Titulo del curso"}></InputText>
            <InputText title={"Subtitulo"}></InputText>
            <Line></Line>
            <Cover></Cover>
            <Line></Line>
            <Description></Description>
            <Line></Line>
            <Content></Content>
            <Line></Line>
        </div>
    )
}

export default Principal;