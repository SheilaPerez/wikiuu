import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrincipalPage from './Pages/PrincipalPage';
import MyCoursesPage from './Pages/MyCoursesPage';
import Footer from './Components/Footer';
import { useState } from 'react';
import Header from './Components/Header';
import LoginModal from './Components/LoginModal';
import RegisterModal from './Components/RegisterModal';
import PasswordModal from './Components/PasswordModal';
import HeaderLogged from './Components/HeaderLogged';
import { initialGlobalState, GlobalContextProvider } from './Context/GlobalContext';
import TeacherExplicationPage from './Pages/TeacherExplicationPage';

function App() {
    const [globalState, setGlobalState] = useState(initialGlobalState);

    const handleOpenModal = () => {
        setGlobalState({ ...globalState, modalState: {...globalState.modalState, isRegisterModalOpen: true}});
    }

    const handleCloseModal = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isRegisterModalOpen: false }});
    }

    const handleOpenLoginModal = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: true }});
    }

    const handleCloseLoginModal = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: false }});
    }

    const onClickRegister = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: false, isRegisterModalOpen: true}})
    }

    const onClickStartSession = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: true, isRegisterModalOpen: false }})
    }

    const onClickCloseModalBtn = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isRegisterModalOpen: false }});
    }

    const onClickCloseLoginBtn = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: false }});
    }
    
    const onClickForgetPassword = () => {
        setGlobalState({ ...globalState, modalState: { isRegisterModalOpen: false, isLoginModalOpen: false, isPassModalOpen: true }})

    }

    const clickClosePassModalBtn = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isPassModalOpen: false }});

    }

    const handleClosePassModal = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isPassModalOpen: false }});

    }
    
    return (
        <GlobalContextProvider value={{globalState, setGlobalState}}>
                <Router>
                    {globalState.isLogged ? <HeaderLogged></HeaderLogged> :
                    <Header onClickOpenLoginModal={handleOpenLoginModal} onClickModalRegister={handleOpenModal}></Header>         
                    }
                    {globalState.modalState?.isLoginModalOpen && <LoginModal handleClickCloseLoginModal={handleCloseLoginModal} handleClickRegister={onClickRegister} handleClickCloseLoginBtn={onClickCloseLoginBtn} handleClickForgetPassword={onClickForgetPassword}></LoginModal>}
                    {globalState.modalState?.isRegisterModalOpen && <RegisterModal handleClickCloseModal={handleCloseModal} handleClickStartSession={onClickStartSession} handleClickCloseModalBtn={onClickCloseModalBtn}></RegisterModal> }
                    {globalState.modalState?.isPassModalOpen && <PasswordModal handleClosePassModalBtn={clickClosePassModalBtn} handleClickClosePassModal={handleClosePassModal}></PasswordModal>}
                    <Routes>
                        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>
                        <Route path="/mycourses" element={<MyCoursesPage></MyCoursesPage>}></Route>
                        <Route path="/teachers" element={<TeacherExplicationPage>
                        {globalState.modalState?.isRegisterModalOpen && <RegisterModal handleClickCloseModal={handleCloseModal} handleClickStartSession={onClickStartSession} handleClickCloseModalBtn={onClickCloseModalBtn}></RegisterModal>}
                        </TeacherExplicationPage>}></Route>
                    </Routes>
                    <Footer></Footer>
                </Router>
        </GlobalContextProvider>
  );
}

export default App;
