import styles from "../../styles/Body.module.css";
import { Button,Input, Upload } from "antd";

export default function Devlogram() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <span style={{ fontWeight: "800" }}>DEVELO</span>
        <span>GRAM</span>
      </div>
      <div className={styles.inputTitle}>
        개발과 관련된 이미지는 무엇이든 올려주세요!
      </div>
      <div>
        <Upload>
        <Button type="file" className={styles.buttonContainer}
          icon={
            <img
              src="/svg/prefix/picture.svg"
              width="18px"
              alt="picture"
              style={{ marginRight: "8px" }}
            />
          }
          size="large"
          type="primary"
        >
          .jpr or .png 업로드
        </Button>
        </Upload>
      </div>
    </div>
  );
}
