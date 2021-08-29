import styles from "../../styles/Body.module.css";
import { Button, Col, Input } from "antd";
import { CodeOutlined, CloseOutlined } from "@ant-design/icons";
export default function DevEnv(props) {
  const buttonSize = "middle";
  const itemList = [
    "OS",
    "Computer",
    "Moniter",
    "Mobile",
    "Keyboard",
    "Mouse/Trackpad",
    "Camera",
    "Mic",
    "Earphone",
    "Desk/Chair",
    "Etc",
  ];

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.cardTitle}>개발환경</div>

        {itemList.map((list, i) => {
          return (
            <div>
              <div className={styles.inputTitle}>{list}</div>
              <div style={{ display: "flex", flexFlow: "row wrap", marginBottom:"30px" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {props.data[i + 2].map((item, j) => {
                    return (
                      <li className={styles.addedItem}>
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
                          onClick={() => props.deleteItem(item, i + 2)}
                        />
                      </li>
                    );
                  })}
                </div>

                {props.toggle && props.toggle[i + 2] ? (
                  <Button
                    type="dashed"
                    size={buttonSize}
                    onClick={() => {
                      let toggleTemp = [...props.toggle];
                      toggleTemp[i + 2] = false;
                      props.setToggle(toggleTemp);
                    }}
                  >
                    +추가
                  </Button>
                ) : (
                  <Col span={5}>
                    <Input
                      className={styles.addedItem}
                      size="large"
                      placeholder="항목을 입력 해주세요"
                      onPressEnter={(e) =>
                        props.saveData(i + 2, e.target.value)
                      }
                      autoFocus={true}
                      onBlur={() => {
                        let temp = [...props.toggle];
                        for (let i = 0; i < temp.length; i++) {
                          temp[i] = true;
                        }
                        props.setToggle(temp);
                      }}
                    />
                  </Col>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
