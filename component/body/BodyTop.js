import styles from "../../styles/Body.module.css";
import { Button, Switch, Tooltip, Upload } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function BodyTop() {
  return (
    <div className={styles.bodyTopContainer}>
      <div className={styles.bodyTopLeftContainer}>
        <span >내 프로필 수정하기</span>

        <img style={{cursor:"pointer"}} src="/svg/body/gear.svg" />
      </div>
      <div className={styles.bodyTopRightContainer}>
        <li>리스트 등록</li>

        <Tooltip title="/users page 노출 여부">
          <QuestionCircleOutlined className={styles.qm} />
        </Tooltip>

        <li>
          <Switch defaultChecked />
        </li>
      </div>
    </div>
  );
}
