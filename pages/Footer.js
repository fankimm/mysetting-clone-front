import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerChildContainer}>
        <img
          className={styles.footerLogo}
          src="/svg/footer/footerLogo.svg"
          alt="footerLogo"
        />
        <ul className={styles.footerList}>
          <a>
            <li>About</li>
          </a>
          <a>
            <li>Badge</li>
          </a>
          <a>
            <li>Contact</li>
          </a>
          <a>
            <li>Activity</li>
          </a>
          <a>
            <li>Terms of service</li>
          </a>
          <a>
            <li>Privacy Policy</li>
          </a>
        </ul>
      </div>
      
    </div>
  );
}
