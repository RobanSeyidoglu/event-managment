import Icon from "../Icon/Icon";
import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.Footer}>
        <a
            href="https://github.com/RobanSeyidoglu"
            target="_blank"
            rel="noreferrer"
        >
            <Icon icon="github" size={29} className={styles.SocialIcon}/>
        </a>
    </footer>
);

export default Footer;