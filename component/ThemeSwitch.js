import styles from "../styles/Navbar.module.css";
import { Switch } from "antd";

export default function ThemeSwitch(props) {
  return (
    <span className={styles.themeSwitchContainer}>
      <li className={styles.sun}>
        <img src="/svg/header/sunIcon.svg" alt="sun" />
      </li>
      <li className={styles.switch}>
        <Switch
          className={styles.themeSwitch}
          size="small"
          defaultChecked={props.themeSwitchChecked}
          onClick={() => {
           
              // console.log(props.themeSwitchChecked);
              props.setthemeSwitchChecked(!props.themeSwitchChecked);
           
            
          }}
        />
      </li>
      <li className={styles.moon}>
        <img src="/svg/header/moonIcon.svg" alt="moon" />
      </li>
    </span>
  );
}
