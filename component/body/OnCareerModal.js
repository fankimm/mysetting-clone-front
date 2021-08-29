import styles from "../../styles/OnCareerModal.module.css";

import { Modal, Input, Row, Col, Button } from "antd";
export default function OnCareerModal(props) {
  const { TextArea } = Input;
  const colSpan = [4, 19];
  const gutter = [16, 16];

  
  const saveBtn = ()=>{
    // console.log(tempObj)
    let tempArr=[]
    props.setIsCMVisible(false)
    let temp = {...props.careerData}
    
    tempArr.push(document.getElementById('career_companyInput').value)
    tempArr.push(document.getElementById('career_positionInput').value)
    tempArr.push(document.getElementById('career_linkInput').value)
    tempArr.push(document.getElementById('career_startInput').value)
    tempArr.push(document.getElementById('career_endInput').value)
    tempArr.push(document.getElementById('career_descriptionInput').value)

    temp.career.push(tempArr)
    props.setCareerData(temp)

    document.getElementById('career_companyInput').value=''
    document.getElementById('career_positionInput').value=''
    document.getElementById('career_linkInput').value=''
    document.getElementById('career_startInput').value=''
    document.getElementById('career_endInput').value=''
    document.getElementById('career_descriptionInput').value=''

  }
  return (
    <Modal
      width="520px"
      title="내용 입력"
      visible={props.isCMVisible}
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
            <div>회사명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="career_companyInput"></Input>
            <div className={styles.bottomDescription}>필수로 입력해주세요.</div>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>직책 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="career_positionInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>링크 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="career_linkInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>시작일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input placeholder="xxxx.xx" id="career_startInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>종료일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input placeholder="xxxx.xx" id="career_endInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>설명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <TextArea row={4} id="career_descriptionInput"></TextArea>
          </Col>
        </Row>
        {/* {clearInput} */}
      </div>
      
    </Modal>
  );
}
