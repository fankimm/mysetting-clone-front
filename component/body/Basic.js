import styles from "../../styles/Body.module.css";
import { Input, Row, Col} from "antd";

export default function Basic() {
  const { TextArea } = Input;

    const gutter=16
    const colSpan=24
    return (
        <div className={styles.card}>
        <span className={styles.cardTitle}>기본정보</span>
        <div className={styles.topRow}>
          <Row
            gutter={[gutter, gutter]}
            className={styles.antdRow}
            justify="space-around"
            align="left"
          >
            <Col flex="1 1" span={colSpan} className="basicInfoCol">
              <div className={styles.inputTitle}>직군</div>
              <Input id="positionInput"
                className={styles.input}
                placeholder="ex) 개발자, 프론트엔드 개발자, DevOps 엔지니어, ..."
              />
            </Col>
            <Col flex="1 1" span={colSpan} className="basicInfoCol">
              <div className={styles.inputTitle}>소속</div>
              <Input
                id="companyInput"
                className={styles.input}
                placeholder="ex) 재직중인 회사명, 프리랜서, ..."
              />
            </Col>
            <Col flex="1 1" span={colSpan} className="basicInfoCol">
              <div className={styles.inputTitle}>위치</div>
              <Input
              id = "locationInput"
                className={styles.input}
                placeholder="ex) 서울, 대한민국, ..."
              />
            </Col>
            <Col flex="1 1" span={colSpan} className="basicInfoCol">
              <div className={styles.inputTitle}>웹사이트</div>
              <Input id="websiteInput" className={styles.input} placeholder="ex) https://..." />
            </Col>
          </Row>
        </div>
        <div className={styles.bottomRow}>
          <Row className={styles.antdRow}>
            <p className={styles.inputTitle}>자기소개</p>
            <div className={styles.textArea}>
              <TextArea rows={5} />
            </div>
          </Row>
        </div>
      </div>
    )
}
