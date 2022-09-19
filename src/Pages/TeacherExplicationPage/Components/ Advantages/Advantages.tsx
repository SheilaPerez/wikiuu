import styles from './Advantages.module.css';
import { FC } from 'react';
import Advantage from './Components/Advantage';
interface Props {

}
const Advantages: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <Advantage title={"gestión especializada"} subtitle={"Ahorra tiempo y mejora la eficiendia gestioando en un solo lugar las visualizaciones, rangos de edad, en las ciudades que mas compran, etc."} subtitleClass={styles.subtitle}></Advantage>
            <Advantage title={"incrementa las ventas"} subtitle={"Por tu cuenta con el link generado a través de la web, en nuestro buscador a partir de otros videos o con la publicidad que nosotros mismos iremos haciendo de todos los cursos que se van publicando."} subtitleClass={styles.subtitleMiddle}></Advantage>
            <Advantage title={"date a conocer"} subtitle={"Publica tu propio perfil público para que otras personas sepan de ti. Expón tus redes sociales para que puedan crecer tus seguidores."} subtitleClass={styles.subtitle}></Advantage>
        </div>

    )
}

export default Advantages;