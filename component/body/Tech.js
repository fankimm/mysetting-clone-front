import styles from "../../styles/Body.module.css";
import { Input, Col, Button } from "antd";
import { CodeOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";

export default function Tech(props) {
  const buttonSize = "middle";
  const colSpan = 6;
function hideInput(){
  

    let temp = [...props.toggle];
    for (let i = 0; i < temp.length; i++) {
      temp[i] = true;
    }
    props.setToggle(temp);
  
}
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.cardTitle}>기술</div>

        <div className={styles.myRow}>
          <div className={styles.inputTitle}>
            어떤 도구나 언어를 가장 많이 사용하나요?
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {props.data[0].map((item, i) => {
              return (
                <li className={styles.addedItem} key={i}>
                  <CodeOutlined
                    style={{
                      marginLeft: "8px",
                      marginRight: "8px",
                      color: "rgb(190,190,190)",
                    }}
                  />
                  {item}
                  <CloseOutlined
                    style={{ marginLeft: "8px", marginRight: "8px" }}
                    onClick={() => props.deleteItem(item, 0)}
                  />
                </li>
              );
            })}
            {props.toggle[0] ? (
              <Button
                type="dashed"
                size={buttonSize}
                onClick={() => {
                  let temp = [...props.toggle];
                  temp[0] = false;
                  props.setToggle(temp);
                }}
              >
                +추가
              </Button>
            ) : (
              <Col span={colSpan}>
                <Input
                  id="focus"
                  className={styles.addedItem}
                  size="large"
                  placeholder="기술을 입력 해주세요"
                  onPressEnter={(e) => props.saveData(0, e.target.value)}
                  autoFocus={true}
                  onBlur={() => {
                    let temp = [...props.toggle];
                    for (let i = 0; i < temp.length; i++) {
                      temp[i] = true;
                    }
                    props.setToggle(temp);
                  }}
                />
                {/* {document.getElementById('focus').focus() ? props.setBlur(false) : props.setBlur(true)} */}
              </Col>
            )}
          </div>
        </div>

        <div className={styles.myRow}>
          <div className={styles.inputTitle}>
            최근 공부하고 있거나 경험이 있는 것도 알려주세요!
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {props.data[1].map((item, i) => {
              return (
                <li className={styles.addedItem} key={i}>
                  <CodeOutlined
                    style={{
                      marginLeft: "8px",
                      marginRight: "8px",
                      color: "rgb(190,190,190)",
                    }}
                  />
                  {item}
                  <CloseOutlined
                    style={{ marginLeft: "8px", marginRight: "8px" }}
                    onClick={() => props.deleteItem(item, 1)}
                  />
                </li>
              );
            })}
            {props.toggle[1] ? (
              <Button
                type="dashed"
                size={buttonSize}
                onClick={() => {
                  let temp = [...props.toggle];
                  temp[1] = false;
                  props.setToggle(temp);
                }}
              >
                +추가
              </Button>
            ) : (
              <Col span={colSpan}>
                <Input
                  autoFocus={true}
                  onBlur={() => {
                    let temp = [...props.toggle];
                    for (let i = 0; i < temp.length; i++) {
                      temp[i] = true;
                    }
                    props.setToggle(temp);
                  }}
                  className={styles.addedItem}
                  size="large"
                  placeholder="기술을 입력 해주세요"
                  onPressEnter={(e) => props.saveData(1, e.target.value)}
                />
              </Col>
            )}
          </div>
        </div>

        {/* <div className={styles.myRow}>
          <div className={styles.inputTitle}>
            최근 공부하고 있거나 경험이 있는 것도 알려주세요!
          </div>
          <div>
            <div style={{ display: "flex" }}>
              {props.study.map((item, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      border: "1px solid rgb(190,190,190)",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "3px",
                      marginRight: "8px",
                    }}
                  >
                    <CodeOutlined
                      style={{
                        marginLeft: "8px",
                        marginRight: "8px",
                        color: "rgb(190,190,190)",
                      }}
                    />
                    {item}
                    <CloseOutlined
                      style={{ marginLeft: "8px", marginRight: "8px" }}
                      onClick={() => props.deleteItem(item, 1)}
                    />
                  </span>
                );
              })}

              <Button
                type="dashed"
                size={buttonSize}
                onClick={() => {
                  // return props.addBtnArrMod(1);
                }}
              >
                +추가
              </Button>

              <Col span={7}>
                <Input
                  size="large"
                  defaultValue=""
                  placeholder="기술을 입력 해주세요"
                  onPressEnter={onPressEnter}
                ></Input>
              </Col>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
