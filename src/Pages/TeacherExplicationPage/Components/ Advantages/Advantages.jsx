import styles from './Advantages.module.css';

const Advantages = () => {
    return (
        <div className={styles.container}>
            <div className={styles.advantage}>
                <h4 className={styles.title}>gestión especializada</h4>
                <p className={styles.lines}>- - - - -</p>
                <p className={styles.subtitle}>Ahorra tiempo y mejora la eficiendia gestioando en un solo lugar las visualizaciones, rangos de edad, en las ciudades que mas compran, etc.</p>
            </div>
            <div className={styles.advantage}>
                <h4 className={styles.title}>incrementa las ventas</h4>
                <p className={styles.lines}>- - - - -</p>
                <p className={styles.subtitleMiddle}>Por tu cuenta con el link generado a través de la web, en nuestro buscador a partir de otros videos o con la publicidad que nosotros mismos iremos haciendo de todos los cursos que se van publicando.</p>
            </div>
            <div className={styles.advantage}>
                <h4 className={styles.title}>date a conocer</h4>
                <p className={styles.lines}>- - - - -</p>
                <p className={styles.subtitle}>Publica tu propio perfil público para que otras personas sepan de ti. Expón tus redes sociales para que puedan crecer tus seguidores.</p>
            </div>
        </div>

    )
}

export default Advantages;