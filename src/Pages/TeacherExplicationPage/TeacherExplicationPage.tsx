import styles from './TeacherExplicationPage.module.css';
import ImageHeader from './Components/ImageHeader';
import Advantages from './Components/ Advantages';
import { FC, useState } from 'react';
interface Props {
    children: any; 
}
const TeacherExplicationPage: FC<Props> = ({children}) => {
    return(
        <div>
            <ImageHeader></ImageHeader>
            {children}
            <Advantages></Advantages>
        </div>
    )
}

export default TeacherExplicationPage;