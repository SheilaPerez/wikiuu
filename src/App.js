import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrincipalPage from './Pages/PrincipalPage';
import MyCoursesPage from './Pages/MyCoursesPage';
import Footer from './Components/Footer';
import { useState } from 'react';
import { GlobalContextModalsProvider } from './Context/GlobalContextModals';
import Header from './Components/Header';
import LoginModal from './Components/LoginModal';
import RegisterModal from './Components/RegisterModal';
import PasswordModal from './Components/PasswordModal';
import HeaderLogged from './Components/HeaderLogged';
import { GlobalContextIsLoggedProvider } from './Context/GlobalContextIsLogged';
import TeacherExplicationPage from './Pages/TeacherExplicationPage';

function App() {
    const [modalState, setModalState] = useState({ isRegisterModalOpen: false, isLoginModalOpen: false, isPassModalOpen: false });
    const [isLogged, setIsLogged] = useState(false);

    const handleOpenModal = () => {
        setModalState({...modalState, isRegisterModalOpen: true});
    }

    const handleCloseModal = () => {
        setModalState({...modalState, isRegisterModalOpen: false});
    }

    const handleOpenLoginModal = () => {
        setModalState({...modalState, isLoginModalOpen: true});
    }

    const handleCloseLoginModal = () => {
        setModalState({...modalState, isLoginModalOpen: false});
    }

    const onClickRegister = () => {
        setModalState({isRegisterModalOpen: true, isLoginModalOpen: false})
    }

    const onClickStartSession = () => {
        setModalState({isRegisterModalOpen: false, isLoginModalOpen: true})
    }

    const onClickCloseModalBtn = () => {
        setModalState({...modalState, isRegisterModalOpen: false});
    }

    const onClickCloseLoginBtn = () => {
        setModalState({...modalState, isLoginModalOpen: false});
    }
    
    const onClickForgetPassword = () => {
        setModalState({isRegisterModalOpen: false, isLoginModalOpen: false, isPassModalOpen: true})

    }

    const clickClosePassModalBtn = () => {
        setModalState({...modalState, isPassModalOpen: false});

    }

    const handleClosePassModal = () => {
        setModalState({...modalState, isPassModalOpen: false});

    }
    
    return (
        <GlobalContextIsLoggedProvider value={{isLogged, setIsLogged}}>
            <GlobalContextModalsProvider value={{modalState, setModalState}}>
                <Router>
                    {isLogged ? <HeaderLogged></HeaderLogged> :
                    <Header onClickOpenLoginModal={handleOpenLoginModal} onClickModalRegister={handleOpenModal}></Header>         
                    }
                    {modalState.isLoginModalOpen && <LoginModal handleClickCloseLoginModal={handleCloseLoginModal} handleClickRegister={onClickRegister} handleClickCloseLoginBtn={onClickCloseLoginBtn} handleClickForgetPassword={onClickForgetPassword}></LoginModal>}
                    {modalState.isRegisterModalOpen && <RegisterModal handleClickCloseModal={handleCloseModal} handleClickStartSession={onClickStartSession} handleClickCloseModalBtn={onClickCloseModalBtn}></RegisterModal> }
                    {modalState.isPassModalOpen && <PasswordModal handleClosePassModalBtn={clickClosePassModalBtn} handleClickClosePassModal={handleClosePassModal}></PasswordModal>}
                    <Routes>
                        <Route path="/" element={<PrincipalPage></PrincipalPage>}></Route>
                        <Route path="/mycourses" element={<MyCoursesPage></MyCoursesPage>}></Route>
                        <Route path="/teachers" element={<TeacherExplicationPage></TeacherExplicationPage>}></Route>
                    </Routes>
                    <Footer></Footer>
                </Router>
            </GlobalContextModalsProvider>
        </GlobalContextIsLoggedProvider>
  );
}

export default App;
