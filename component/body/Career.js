import styles from "../../styles/Body.module.css";
import { Button, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function Career(props) {
  const buttonSize = "middle";
  // const clearInput = ()=>{
  //   document.getElementById('career_companyInput').value=''
  //   document.getElementById('career_positionInput').value=''
  //   document.getElementById('career_linkInput').value=''
  //   document.getElementById('career_startInput').value=''
  //   document.getElementById('career_endInput').value=''
  //   document.getElementById('career_descriptionInput').value=''
  // }
  const deleteItem = (index) =>{
    let temp = {...props.careerData}
    temp.career.splice(index,1)
    props.setCareerData(temp)
  }

  return (
    <div>
      
      <div className={styles.card}>
        <div className={styles.cardTitle}>경력</div>
        <div style={{ display: "flex",flexWrap:"wrap" }}>
          {props.careerData.career.map((item, j) => {
            return (
              <li style={{ display: "flex",paddingLeft:"10px", paddingRight:"10px" }} className={styles.addedItem}>
                
                <div>
                  {props.careerData.career[j].map((item2,k) => {
                    return(k === 0 
                    ? <div style={{color:"var(--hover-green)", fontSize:"18px"}}>{item2}</div>
                    : <div>{item2}</div>)
                    
                  })}

                </div>
                <CloseOutlined
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={() => deleteItem(j)}
                />
              </li>
            );
          })}
          <div className={styles.buttonContainer}>
            <Button
              type="dashed"
              size={buttonSize}
              onClick={() => {
                return (
                  <>
                    {props.setIsCMVisible(true)}
                    {/* <OnCareerModal
                          isCMVisible={props.isCMVisible}
                          setIsCMVisible={props.setIsCMVisible}
                          handleCancel={props.handleCancel}
                          handleOk={props.handleOk}
                        /> */}
                  </>
                );
              }}
            >
              +추가
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
