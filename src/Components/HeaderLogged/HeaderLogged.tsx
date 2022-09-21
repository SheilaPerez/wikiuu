import styles from './HeaderLogged.module.css';
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FC } from 'react';
import TeachInBtn from './Components/TeachInBtn';
import MyLearning from './Components/MyLearning';
interface Props {

}

const HeaderLogged: FC<Props> = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <div className={styles.logoImage}></div>
                <p className={styles.wikiuu}>Wikiuu</p>
            </div>
            <div className={styles.headerButtonsContainer}>
                <TeachInBtn></TeachInBtn>
                <MyLearning></MyLearning>
                <button className={styles.shopBtn}><RiShoppingCart2Fill/></button>
            </div>
        </div>
    )
}

export default HeaderLogged;