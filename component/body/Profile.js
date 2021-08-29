import styles from "../../styles/Body.module.css";
import { Input, Row, Col, Upload} from "antd";
import {
  
    GithubOutlined,
    TwitterOutlined,
    CameraOutlined
  
  } from "@ant-design/icons";


export default function Profile() {
    const gutter = 16
    const colSpan=24
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>프로필</div>
      <Upload className={styles.avatar}>
      <img
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/19470494?v=4&"
        width="104px"
        alt="fankimm"
        style={{position:"absolute"}}
      />
      <CameraOutlined className="bg-gray-200 w-9 h-9 flex justify-center items-center rounded-full" style={{position:"relative" ,left:"70px", border:"3px solid white"}} />
      
      </Upload>
      <div className={styles.gridContainer}>
        <div className={styles.topRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span={colSpan} className="profileCol">
              <div className={styles.inputTitle}>
                <span style={{ color: "red" }}>* </span>
                이름
              </div>
              <Input id="nameInput" required className={styles.input} value="fankimm" />
            </Col>
            <Col flex="1 1" span={colSpan} className="profileCol">
              <div className={styles.inputTitle}>이메일(수정불가)</div>
              <Input id="emailInput"
                className={styles.input}
                value="no-email+github+19470494@mysetting.io"
                disabled={true}
              />
            </Col>
            <Col flex="1 1" span={colSpan} className="profileCol">
              <div className={styles.inputTitle}>계정명(수정불가)</div>
              <Input id="accountInput" className={styles.input} value="fankimm" disabled={true} />
            </Col>
          </Row>
        </div>

        <div className={styles.bottomRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span={colSpan} className="profileCol">
              <div className={styles.inputTitle}>Github 아이디</div>
              <Input
                id="githubIDInput"
                className={styles.input}
                value="fankimm"
                prefix={<GithubOutlined className={styles.icon} />}
              />
            </Col>
            <Col flex="1 1" span={colSpan} className="profileCol">
              <div className={styles.inputTitle}>Twitter 아이디</div>
              <Input id="twitterIDInput"
                className={styles.input}
                placeholder="Twitter 아이디를 입력해주세요."
                prefix={<TwitterOutlined className={styles.icon} />}
              />
            </Col>

            <Col flex="1 1" span={colSpan}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
