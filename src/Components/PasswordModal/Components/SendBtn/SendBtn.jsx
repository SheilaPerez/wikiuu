import styles from './SendBtn.module.css';

const SendBtn = () => {
    return (
        <div>
            <button type="button" className={styles.send}>Enviar</button>
        </div>
    )
}

export default SendBtn;