import styles from './BuyCoursePage.module.css';
import BuyCourseBox from './Components/BuyCourseBox';
import Contents from './Components/Contents';
import BlueHeader from './Components/BlueHeader';
import AboutTeacher from './Components/AboutTeacher';
import { useState } from 'react';
const BuyCoursePage = () => {
    const [aboutTeacherBtnClicked, setAboutTeacherBtnClicked] = useState(false);
    const [contentBtnClicked, setContentBtnClicked] = useState(true);

    const aboutTeacherClicked = () => {
        setAboutTeacherBtnClicked(true);
        setContentBtnClicked(false);
    }

    const contentClicked = () => {
        setContentBtnClicked(true);
        setAboutTeacherBtnClicked(false);
    }
    return (
        <div>
            <BlueHeader aboutTeacherClicked={aboutTeacherClicked} contentClicked={contentClicked}></BlueHeader>
            <BuyCourseBox></BuyCourseBox>
            {aboutTeacherBtnClicked && <AboutTeacher></AboutTeacher>}
            {contentBtnClicked && <Contents></Contents>}
        </div>
    )
}

export default BuyCoursePage;