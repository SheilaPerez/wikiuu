import { FC } from 'react';
import MenuLink from './Components/MenuLink';
import styles from './LeftMenu.module.css';
import { useNavigate } from 'react-router-dom';
interface Props {

}
const LeftMenu: FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.menuContainer}>
            <MenuLink buttonName={"Inicio"} handleClickLink={() => navigate("")}></MenuLink>
            <MenuLink buttonName={"Mis cursos"} handleClickLink={() => navigate("teachercourses")}></MenuLink>
            <MenuLink buttonName={"Comentarios"} handleClickLink={() => navigate("/")}></MenuLink>
            <MenuLink buttonName={"Monetización"} handleClickLink={() => navigate("/")}></MenuLink>
        </div>
    )
}

export default LeftMenu;