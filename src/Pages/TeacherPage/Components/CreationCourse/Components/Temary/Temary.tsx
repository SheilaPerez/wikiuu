import styles from './Temary.module.css';
import AddTemaryBtn from './Components/AddTemaryBtn';
import Line from '../Line';
import AddInput from './Components/AddInput';
import AddTemary from './Components/AddTemary';
const Temary = () => {
    return (
        <div>
            <Line></Line>
            <AddTemaryBtn></AddTemaryBtn>
            <div className={styles.addTemaryContainer}>
                <AddInput inputTitle={"Título del temario"}></AddInput>
                <Line></Line>
                <AddTemary></AddTemary>
            </div>
        </div>
    )
}

export default Temary;