import { FC } from 'react';
import styles from './MenuLink.module.css';

interface Props {
    buttonName: string;
    handleClickLink: () => void;
}
const MenuLink: FC<Props> = ({buttonName, handleClickLink}) => {
    return (
        <div>
            <button type="button" className={styles.button} onClick={handleClickLink}>{buttonName}</button>
        </div>
    )
}

export default MenuLink;