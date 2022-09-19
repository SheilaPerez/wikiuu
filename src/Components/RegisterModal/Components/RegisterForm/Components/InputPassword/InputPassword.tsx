import { FC } from "react"
import styles from "./InputStyle.module.css"

interface Props {
    placeholder: string;
    onChangePassword: (e: any) => void;
}

const InputPassword: FC<Props> = ({ placeholder, onChangePassword }) => {
    return (
        <input type="text" placeholder={placeholder} onChange={(e) => onChangePassword(e)} className={styles.inputStyle}></input>
    )
}

export default InputPassword