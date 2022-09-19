import DescriptionTitle from './Components/DescriptionTitle';
import ExampleCourses from './Components/ExampleCourses';
import StudenExplication from './Components/StudentExplication';
import TeacherExplication from './Components/TeacherExplication';
import GlobalContext from '../../Context/GlobalContext';
import { useContext, FC } from 'react';
interface Props {
    
}
const PrincipalPage: FC<Props> = () => {
    const {globalState, setGlobalState } = useContext(GlobalContext);
    
    const openLogin = () => {
        setGlobalState({...globalState, modalState: {...globalState.modalState, isLoginModalOpen: true}});
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