import { FC, useState } from "react"
import styles from "./InputPassword.module.css"
import { TbEyeOff, TbEye } from "react-icons/tb";

interface Props {
    placeholder: string;
    onChangePassword: (e: any) => void;
    role?: string;
}

const InputPassword: FC<Props> = ({ placeholder, onChangePassword, role }) => {
    const [passwordShow, setPasswordShow] = useState(false);

    const handleClickEye = () => {
        setPasswordShow(!passwordShow);
    }

    return (
        <div className={styles.inputContainer}>
            <input role={role} type={passwordShow ? "text" : "password"} placeholder={placeholder} onChange={(e) => onChangePassword(e)} className={styles.inputStyle}></input>
            <div className={styles.eye} onClick={handleClickEye}>{passwordShow ? <TbEye/> : <TbEyeOff/>}</div>
        </div>
    )
}

export default InputPassword;