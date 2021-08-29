import { Modal, Dropdown, Menu } from "antd";

import styles from "../styles/Navbar.module.css";

import { useState, useEffect } from "react";

import { Switch } from "antd";
export default function Navbar(props) {
  const collapseTreshHold = 768;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // useEffect(() => {
  //   props.themeSwitchChecked
  //   ? document.querySelector("div").classList.add("dark")
  //   : document.querySelector("div").classList.remove("dark")
  //   // console.log(document.getElementById('mytest').className)
  // }, [props.themeSwitchChecked]);

  const menu = (
    <Menu className={styles.dropdownContainer}>
      <Menu.Item className={styles.dropdownMenuItem}>
        <div style={{ display: "flex" }}>
          <img
            className={styles.dropdownIcon}
            src="/svg/dropdown/myProfile.svg"
            alt="myProfile"
          />
          내 프로필
        </div>
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenuItem}>
        <div style={{ display: "flex" }}>
          <img
            className={styles.dropdownIcon}
            src="/svg/dropdown/mySlide.svg"
            alt="myProfile"
          />
          내 슬라이드
        </div>
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenuItem}>
      <div style={{display:"flex"}}>
        <img
          className={styles.dropdownIcon}
          src="/svg/dropdown/manageProfile.svg"
          alt="myProfile"
        />
        프로필 관리
        </div>
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenuItem}>
      <div style={{display:"flex"}}>
        <img
          className={styles.dropdownIcon}
          src="/svg/dropdown/logout.svg"
          alt="myProfile"
        />
        로그아웃
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarChildContainer}>
        <ul className={styles.navbarLeftContainer}>
          <li className={styles.logoAndTitle}>
            <a href="/">
              <img src="/svg/header/mysettingLogo.svg" alt="logo" />
              <span>mysetting</span>
            </a>
          </li>

          {props.width > collapseTreshHold ? (
            <>
              <li className={styles.navbarItem}>/users</li>
              <li className={styles.navbarItem}>/posts</li>
              <li className={styles.navbarItem}>/slides</li>
              <li className={styles.navbarItem}>/apps</li>
              <li className={styles.navbarItem}>/books</li>
            </>
          ) : null}
        </ul>

        <Modal
          className={styles.modal}
          width="224px"
          bodyStyle={{ height: "100vh", padding: "0", margin: "0" }}
          style={{ position: "fixed", top: "0", right: "0" }}
          footer={null}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalTopContainer}>
              <a className={styles.modalMenu}>
                <li className={styles.modalList}>/users</li>
              </a>
              <a className={styles.modalMenu}>
                <li className={styles.modalList}>/posts</li>
              </a>
              <a className={styles.modalMenu}>
                <li className={styles.modalList}>/slides</li>
              </a>
              <a className={styles.modalMenu}>
                <li className={styles.modalList}>/apps</li>
              </a>
              <a className={styles.modalMenu}>
                <li className={styles.modalList}>/books</li>
              </a>
            </div>
            <div className={styles.modalBottomContainer}>
              <li>
                <a>
                  <img
                    className={styles.dropdownIcon}
                    src="/svg/dropdown/myProfile.svg"
                    alt="myProfile"
                  />
                  <span>내 프로필</span>
                </a>
              </li>
              <li>
                <a>
                  <img
                    className={styles.dropdownIcon}
                    src="/svg/dropdown/mySlide.svg"
                    alt="myProfile"
                  />
                  내 슬라이드
                </a>
              </li>
              <li>
                <a>
                  <img
                    className={styles.dropdownIcon}
                    src="/svg/dropdown/manageProfile.svg"
                    alt="myProfile"
                  />
                  프로필 관리
                </a>
              </li>

              <li className={styles.modalFooter}>
                <span className={styles.themeSwitchContainer}>
                  <li className={styles.sun}>
                    <img src="/svg/header/sunIcon.svg" alt="sun" />
                  </li>
                  <li className={styles.switch}>
                    <Switch
                      className={styles.themeSwitch}
                      size="small"
                      defaultChecked={props.themeSwitchChecked}
                      checked={props.themeSwitchChecked}
                      onClick={() => {
                        props.setthemeSwitchChecked(!props.themeSwitchChecked);
                      }}
                    />
                  </li>
                  <li className={styles.moon}>
                    <img src="/svg/header/moonIcon.svg" alt="moon" />
                  </li>
                </span>

                <img
                  className={styles.dropdownIcon}
                  src="/svg/dropdown/logout.svg"
                  alt="myProfile"
                />
              </li>
            </div>
          </div>
        </Modal>

        {props.width < collapseTreshHold ? (
          <a className={styles.dropdownLine}>
            <img
              src="/svg/dropdown/dropdown.svg"
              alt="dropdown"
              onClick={showModal}
            ></img>
          </a>
        ) : null}
        {props.width > collapseTreshHold ? (
          <ul className={styles.navbarRightContainer}>
            <span className={styles.themeSwitchContainer}>
              <li className={styles.sun}>
                <img src="/svg/header/sunIcon.svg" alt="sun" />
              </li>
              <li className={styles.switch}>
                <Switch
                  className={styles.themeSwitch}
                  size="small"
                  defaultChecked={props.themeSwitchChecked}
                  checked={props.themeSwitchChecked}
                  onClick={() => {
                    props.setthemeSwitchChecked(!props.themeSwitchChecked);
                  }}
                />
              </li>
              <li className={styles.moon}>
                <img src="/svg/header/moonIcon.svg" alt="moon" />
              </li>
            </span>

            <span className={styles.dropdown}>
              <Dropdown overlay={menu}>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/19470494?v=4&"
                    width="35px"
                    alt="fankimm"
                  />
                  <img src="/svg/dropdown/dropdownArrow.svg" alt="arrow" />
                </li>
              </Dropdown>
            </span>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
