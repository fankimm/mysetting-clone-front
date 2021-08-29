import styles from "../../styles/Body.module.css";
import OnCareerModal from "./OnCareerModal";
import { Button, Input } from "antd";
export default function Career(props) {
  const careerList = ["경력", "프로젝트", "오픈소스", "교육", "활동"];
  // const asdf = ["회사명 : ", "직책 : ", "링크 : ", "시작일 : ", "종료일", ]

  const buttonSize = "middle";
  
  return (
<div>
      {careerList.map((list, index) => {
        return (
          <div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>{list}</div>
              <div className={styles.buttonContainer}>
                <Button
                  type="dashed"
                  size={buttonSize}
                  onClick={() => {
                    return (
                      <>
                        {props.setIsCMVisible(true)}
                        <OnCareerModal
                          isCMVisible={props.isCMVisible}
                          setIsCMVisible={props.setIsCMVisible}
                          handleCancel={props.handleCancel}
                          handleOk={props.handleOk}
                          i={index}
                        />
                      </>
                    );
                  }}
                >
                  +추가
                </Button>
              </div>
            </div>
          </div>
        );
      })}
</div>
  );
}
