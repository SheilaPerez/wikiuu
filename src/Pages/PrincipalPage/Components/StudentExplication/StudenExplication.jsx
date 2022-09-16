import styles from './StudenExplication.module.css'

const StudenExplication = () => {

    return (
        <div className={styles.studenExplicationContainer}>
            <div>           
                <h4 className={styles.title}>Elegirnos para aprender</h4>
                <div className={styles.line}></div>
                <p className={styles.subtitle}>Por el placer de saber, por la duda de ser primeriza o primerizo, por contrastar diferentes puntos de vista, por seguir formandote, por que el saber no ocupa lugar y aquí puedes aprender muchisímo. <br></br>
                <br></br>Con los mejores profesionales, pediatras, pedagogas/os, psicologas/os, profesoras/es, etc. Donde te ayudarán y guiarán a los largo del curso, con videos, un foro para las dudas, guias en pdf, etc. No lo dudes y empieza ahora!</p>
            </div>     
            <div className={styles.image}>
            </div>
        </div>
    )
}

export default StudenExplication;