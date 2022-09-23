import styles from './CreationCourse.module.css';
import PreviewBtn from './Components/PreviewBtn';
import SaveBtn from './Components/SaveBtn';
import Principal from './Components/Principal';
import Temary from './Components/Temary';
import { useState } from 'react';

const CreationCourse = () => {
    const [principalOn, setPrincipalOn] = useState(true);
    const [temariOn, setTemariOn] = useState(false);
    
    const handleClickTemariOn = () => {
        setTemariOn(true);
        setPrincipalOn(false);
    }

    const handleClickprincipalOn = () => {
        setTemariOn(false);
        setPrincipalOn(true);
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.principalTitle}>Creación del curso</h3>
            <div className={styles.creationBtns}>
                <PreviewBtn></PreviewBtn>
                <SaveBtn></SaveBtn>
            </div>
            <div className={styles.creationStartBtns}>
                <button type="button" className={styles.principalBtn} onClick={handleClickprincipalOn}>principal</button>
                <button type="button" className={styles.temariBtn} onClick={handleClickTemariOn}>temario</button>
            </div>
            {temariOn ? <Temary></Temary> : <Principal></Principal>}
          
        </div>
    )
}

export default CreationCourse;                      