import styles from "../../styles/OnCareerModal.module.css";

import { Modal, Input, Row, Col, Button } from "antd";
export default function OnProjectModal(props) {
  const { TextArea } = Input;
  const colSpan = [4, 19];
  const gutter = [16, 16];
  const saveBtn = ()=>{
    // console.log(tempObj)
    let tempArr=[]
    props.setIsPMVisible(false)
    let temp = {...props.careerData}
    
    tempArr.push(document.getElementById('project_titleInput').value)
    tempArr.push(document.getElementById('project_linkInput').value)
    tempArr.push(document.getElementById('project_positionInput').value)
    tempArr.push(document.getElementById('project_startInput').value)
    tempArr.push(document.getElementById('project_endInput').value)
    tempArr.push(document.getElementById('project_descriptionInput').value)


    temp.project.push(tempArr)
    props.setCareerData(temp)

  }

  return (
    <Modal
      width="520px"
      title="내용 입력"
      visible={props.isPMVisible}
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
            <div>프로젝트명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="project_titleInput"></Input>
            <div className={styles.bottomDescription}>필수로 입력해주세요.</div>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>역할 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="project_positionInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>링크 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="project_linkInput"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>시작일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="project_startInput" placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>종료일 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <Input id="project_endInput" placeholder="xxxx.xx"></Input>
          </Col>
        </Row>

        <Row gutter={gutter} className={styles.onCareerModalRow}>
          <Col span={colSpan[0]} className={styles.sonCareerModalCol}>
            <div>설명 : </div>
          </Col>
          <Col span={colSpan[1]} className={styles.sonCareerModalCol}>
            <TextArea row={4} id="project_descriptionInput"></TextArea>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
