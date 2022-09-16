import styles from './ImageHeader.module.css';
import RegisterNowBtn from './Components/RegisterNowBtn';

const ImageHeader = () => {
    return (
        <div className={styles.imageContainer}>
         <div className={styles.titleAndBtn}>
            <h3 className={styles.title}>Descubre todo lo que wikiuu puede hacer por ti.</h3>
            <RegisterNowBtn></RegisterNowBtn>
        </div>
        </div>
    )
}

export default ImageHeader;