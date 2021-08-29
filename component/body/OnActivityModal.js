import styles from "../../styles/OnCareerModal.module.css";

import { Modal, Input, Row, Col, Button } from "antd";
export default function OnActivityModal(props) {
  const { TextArea } = Input;
  const colSpan = [4, 19];
  const gutter = [16, 16];
  const id = ["activity_nameInput","activity_positionInput","activity_startInput","activity_endInput","activity_descriptionInput"]
  const saveBtn = ()=>{
    // console.log(tempObj)
    let tempArr=[]
    
    let temp = {...props.careerData}
    
    for (var i = 0; i<id.length;i++){
      tempArr.push(document.getElementById(id[i]).value)
    }
    

    temp.activity.push(tempArr)
    props.setCareerData(temp)
    props.setIsAMVisible(false)
    

  }
  return (
    <Modal
      width="520px"
      title="내용 입력"
      visible={props.isAMVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[
        <Button key="back" onClick={props.handleCancel}>
          취소
        </Button>,
        <Button key="submit" type="primary" onClick={saveBtn}>
          저장
        </Button>,
      ]}
    >
      <div className={styles.modalBodyContainer}>
        <Row gutter={gutter} className={styles.onCareerModalRowWithDescription}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>이름 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id={id[0]}></Input>
            <div className={styles.bottomDescription}>필수로 입력해주세요.</div>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>역할/제목 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id={id[1]}></Input>
          </Col>
        </Row>

        

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>시작일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id={id[2]} placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>종료일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id={id[3]} placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>설명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <TextArea id={id[4]} row={4}></TextArea>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
