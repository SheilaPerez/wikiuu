import styles from './RegisterNowBtn.module.css';
import { FC, useContext } from 'react';
import GlobalContext from '../../../../../../Context/GlobalContext';
interface Props {
}
const RegisterNowBtn: FC<Props> = () => {
    const { globalState, setGlobalState } = useContext(GlobalContext);

    const handleClickRegisterModalOpen = () => {
        setGlobalState({ ...globalState, modalState: { ...globalState.modalState, isLoginModalOpen: false, isRegisterModalOpen: true }})
    }
    return (
        <div>
            <button className={styles.registerBtn} onClick={handleClickRegisterModalOpen}>Regístrate ahora</button>
        </div>

    )
}

export default RegisterNowBtn;