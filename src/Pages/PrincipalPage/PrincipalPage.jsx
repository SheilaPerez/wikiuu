import DescriptionTitle from './Components/DescriptionTitle';
import ExampleCourses from './Components/ExampleCourses';
import StudenExplication from './Components/StudentExplication';
import TeacherExplication from './Components/TeacherExplication';
import GlobalContextModals from '../../Context/GlobalContextModals';
import { useContext } from 'react';

const PrincipalPage = () => {
    const { modalState, setModalState } = useContext(GlobalContextModals);
    
    const openLogin = () => {
        setModalState({...modalState, isLoginModalOpen: true});
    }

    return (
        <div>
            <DescriptionTitle onClickOpenLogin={openLogin}></DescriptionTitle>
            <ExampleCourses></ExampleCourses>
            <StudenExplication></StudenExplication>
            <TeacherExplication></TeacherExplication>
        </div>
    )
}

export default PrincipalPage;