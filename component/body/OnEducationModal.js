import styles from "../../styles/OnCareerModal.module.css";

import { Modal, Input, Row, Col, Button } from "antd";
export default function OnEducationModal(props) {
  const { TextArea } = Input;
  const colSpan = [4, 19];
  const gutter = [16, 16];
  const saveBtn = ()=>{
    // console.log(tempObj)
    let tempArr=[]
    
    let temp = {...props.careerData}
    
    tempArr.push(document.getElementById('education_schoolInput').value)
    tempArr.push(document.getElementById('education_majorInput').value)
    
    tempArr.push(document.getElementById('education_startInput').value)
    tempArr.push(document.getElementById('education_endInput').value)
    tempArr.push(document.getElementById('education_descriptionInput').value)


    temp.education.push(tempArr)
    props.setCareerData(temp)
    props.setIsEMVisible(false)


  }
  return (
    <Modal
      width="520px"
      title="내용 입력"
      visible={props.isEMVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[
        <Button key="back" onClick={saveBtn}>
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
            <div>소속 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="education_schoolInput"></Input>
            <div className={styles.bottomDescription}>필수로 입력해주세요.</div>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>과/역할 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="education_majorInput"></Input>
          </Col>
        </Row>

        

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>시작일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="education_startInput" placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>종료일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="education_endInput" placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>설명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <TextArea id="education_descriptionInput" row={4}></TextArea>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
