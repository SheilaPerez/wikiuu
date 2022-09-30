import styles from './BuyCourseBox.module.css';
import BuyBtn from '../BuyBtn';

const BuyCourseBox = () => {

    const courseBox = {
        image: '',
        price: 100,
        acces: 'Ilimitado',
        time: '2horas',
        recomended: 'Recomendao para padres y profesionales',
        material: 'Con material descargable'
    }
    
    return (
        <div className={styles.boxContainer}>
            <div className={styles.image}></div>
            <div className={styles.priceAndBtn}>
                <p className={styles.price}>{courseBox.price}€</p>
                <BuyBtn></BuyBtn>
            </div>
            <p className={styles.caracteristics}>{courseBox.acces}</p>
            <p className={styles.caracteristics}>{courseBox.time}</p>
            <p className={styles.caracteristics}>{courseBox.recomended}</p>
            <p className={styles.caracteristics}>{courseBox.material}</p>
        </div>
    )
}

export default BuyCourseBox