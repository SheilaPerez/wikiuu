import styles from './Footer.module.css';
import { SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoImage}></div>
                    <p className={styles.logoTitle}>Wikiuu</p>
                </div>
                <div className={styles.linksContainer}>
                    <p className={styles.titleLink}>conócenos</p>
                    <a className={styles.link}>Quien somos</a>
                    <a className={styles.link}>Contacto</a>
                </div>
                <div className={styles.linksContainer}>
                    <p className={styles.titleLink}>ayuda</p>
                    <a className={styles.link}>FAQs</a>
                </div>
                <div className={styles.linksContainer}>
                    <p className={styles.titleLink}>social</p>
                    <div className={styles.socialLinksContainer}>
                        <a className={styles.socialLinks}> <SiInstagram/></a>
                        <a className={styles.socialLinks}><SiLinkedin/></a>
                        <a className={styles.socialLinks}><SiTwitter/></a>
                    </div>
                </div>
                <a className={styles.email}>suport@wikiuu.com</a>
            </div>
        </div>
        
    )
}

export default Footer;