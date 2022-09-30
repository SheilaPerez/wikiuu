import styles from './BlueHeader.module.css';
import { FC, useRef, useState } from 'react';
import ContentBtn from '../ContentBtn';
import AboutTeacherBtn from '../AboutTeacherBtn';
interface Props {
    aboutTeacherClicked: () => void;
    contentClicked: () => void;
}
const BlueHeader: FC<Props> = ({aboutTeacherClicked, contentClicked}) => {
    const [stickyHeader, setStickyHeader] = useState(false);
    const course = {
        title: 'Alimentación complementaria',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        creatorName: 'Sheila Pérez',
    }
    
    const headerRef = useRef<HTMLDivElement>(null);
    const sticky = headerRef.current?.getBoundingClientRect().top;
    window.onscroll = function() {fixedHeader(sticky!)};
    

    function fixedHeader(sticky: number) {
        console.log("window", window.pageYOffset)
        if (window.pageYOffset > 291) {
            setStickyHeader(true)
        } else {
            setStickyHeader(false)
        }
      }
    return (
        <div className={`${styles.blueHeader} ${stickyHeader ? styles.sticky : ""}`} ref={headerRef }>
            <h1>{course.title}</h1>
            <p>{course.subtitle}</p>
            <p>Creado por: {course.creatorName}</p>
            <div className={styles.blueHeaderBtns}>
                <ContentBtn handleClickContentBtn={contentClicked}></ContentBtn>
                <AboutTeacherBtn handleClickAboutTeacher={aboutTeacherClicked}></AboutTeacherBtn>
            </div>
        </div>
    )
}

export default BlueHeader;