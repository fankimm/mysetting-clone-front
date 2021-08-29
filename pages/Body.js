import styles from "../styles/Body.module.css";

import BodyTop from "../component/body/BodyTop";
import Profile from "../component/body/Profile";
import Basic from "../component/body/Basic";
import Link from "../component/body/Link";
import Tech from "../component/body/Tech";
import DevEnv from "../component/body/DevEnv";
import Career from "../component/body/Career";

import Project from "../component/body/Project";
import Education from "../component/body/Education";
import Activity from "../component/body/Activity";
import Devlogram from "../component/body/Devlogram";
import SaveSection from "../component/body/SaveSection";

import OnSameModal from "../component/body/OnSameModal";
import OnCareerModal from "../component/body/OnCareerModal";

import OnProjectModal from "../component/body/OnProjectModal";
import OnEducationModal from "../component/body/OnEducationModal";
import OnActivityModal from "../component/body/OnActivityModal";
// import Export from "../component/body/Export";

import { useState, useEffect,createRef } from "react";

export default function Body(props) {
  let dataForJSON = {
    profile: {
      name: "",
      email: "",
      account: "",
      githubid: "",
      twitterid: "",
    },
    basic: {
      position: "",
      company: "",
      location: "",
      website: "",
    },
    link: {
      youtube: "",
      facebook: "",
      mastodon: "",
      twitch: "",
      instagram: "",
      dribbble: "",
      stackoverflow: "",
      gitlab: "",
      medium: "",
      behance: "",
      linkedin: "",
    },
    stack: {
      tech: [],
      study: ["", ""],
    },
    devEnv: {
      os: [],
      computer: [],
      monitor: [],
      mobile: [],
      keyboard: [],
      mouseAndTrackpad: [],
      camera: [],
      mic: [],
      earphone: [],
      deskAndChair: [],
      etc: [],
    },
    career: [],
    project: [],
    opensource: [],
    education: [],
    activity: [],
  };

  const [toggle, setToggle] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [data, setData] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]); //개발환경 데이터

  const [careerData, setCareerData] = useState({
    career: [],
    open: [],
    project: [],
    education: [],
    activity: [],
  }); //경력,오픈소스,프로젝트,교육,활동 데이터

  const [isSaveBtnPressed, setIsSaveBtnPressed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCMVisible, setIsCMVisible] = useState(false);
  const [isPMVisible, setIsPMVisible] = useState(false);
  const [isOMVisible, setIsOMVisible] = useState(false);
  const [isEMVisible, setIsEMVisible] = useState(false);
  const [isAMVisible, setIsAMVisible] = useState(false);

  const [blur, setBlur] = useState(false);

  const [buttonRef, setButtonRef] = useState(() => createRef());

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsCMVisible(false);
    setIsOMVisible(false);
    setIsPMVisible(false);
    setIsEMVisible(false);
    setIsAMVisible(false);
  };
  const handleOk = () => {
    setIsCMVisible(false);
    setIsOMVisible(false);
    setIsPMVisible(false);
    setIsEMVisible(false);
    setIsAMVisible(false);
  };

  function injection() {
    dataForJSON.profile.name = document.getElementById("nameInput").value;
    dataForJSON.profile.email = document.getElementById("emailInput").value;
    dataForJSON.profile.account = document.getElementById("accountInput").value;
    dataForJSON.profile.githubid =
      document.getElementById("githubIDInput").value;
    dataForJSON.profile.twitterid =
      document.getElementById("twitterIDInput").value;

    dataForJSON.basic.position = document.getElementById("positionInput").value;
    dataForJSON.basic.company = document.getElementById("companyInput").value;
    dataForJSON.basic.website = document.getElementById("websiteInput").value;
    dataForJSON.basic.location = document.getElementById("locationInput").value;

    dataForJSON.link.youtube = document.getElementById("youtubeInput").value;
    dataForJSON.link.facebook = document.getElementById("facebookInput").value;
    dataForJSON.link.mastodon = document.getElementById("mastodonInput").value;
    dataForJSON.link.twitch = document.getElementById("twitchInput").value;
    dataForJSON.link.instagram =
      document.getElementById("instagramInput").value;
    dataForJSON.link.dribbble = document.getElementById("dribbbleInput").value;
    dataForJSON.link.stackoverflow =
      document.getElementById("stackoverflowInput").value;
    dataForJSON.link.gitlab = document.getElementById("gitlabInput").value;
    dataForJSON.link.medium = document.getElementById("mediumInput").value;
    dataForJSON.link.behance = document.getElementById("behanceInput").value;
    dataForJSON.link.linkedin = document.getElementById("linkedinInput").value;

    dataForJSON.stack.tech = data[0];
    dataForJSON.stack.study = data[1];
    dataForJSON.devEnv.os = data[2];
    dataForJSON.career.push(careerData.career);
    dataForJSON.project.push(careerData.project);
    dataForJSON.education.push(careerData.education);
    dataForJSON.activity.push(careerData.activity);
    console.log(JSON.stringify(dataForJSON));
    setIsSaveBtnPressed(false);
  }

  //기술과 개발환경 항목 제거 함수
  function deleteItem(item, i) {
    let temp = [...data];
    let temp2 = [];

    for (var j = 0; j < temp[i].length; j++) {
      if (temp[i][j] != item) {
        temp2.push(temp[i][j]);
      }
    }

    temp[i] = temp2;

    setData(temp);
  }

  //기술과 개발환경 아이템 추가 함수
  function saveData(i, d) {
    let isSame = false;

    let temp = [...data];
    for (var j = 0; j < temp[i].length; j++) {
      if (temp[i][j] == d) {
        isSame = true;
      }
    }
    if (!isSame) {
      temp[i].push(d);
      setData(temp);
    } else {
      setIsModalVisible(true);
    }
  }

  useEffect(() => {
    if (blur) {
      let temp = [...toggle];
      for (let i = 0; i < temp.length; i++) {
        temp[i] = true;
      }
      setToggle(temp);
    }
  }, []);

  return (
    <div className={styles.bodyContainer}>
      <BodyTop />
      <Profile />
      <Basic />
      <Link />
      <Tech
        blur={blur}
        setBlur={setBlur}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={data}
        saveData={saveData}
        toggle={toggle}
        setToggle={setToggle}
        deleteItem={deleteItem}
      />
      <DevEnv
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        data={data}
        saveData={saveData}
        toggle={toggle}
        setToggle={setToggle}
        deleteItem={deleteItem}
      />

      <Career
        isCMVisible={isCMVisible}
        setIsCMVisible={setIsCMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <OnCareerModal
        isCMVisible={isCMVisible}
        setIsCMVisible={setIsCMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />

      <Project
        isPMVisible={isPMVisible}
        setIsPMVisible={setIsPMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <OnProjectModal
        isPMVisible={isPMVisible}
        setIsPMVisible={setIsPMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />

      <Education
        isEMVisible={isEMVisible}
        setIsEMVisible={setIsEMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <OnEducationModal
        isEMVisible={isEMVisible}
        setIsEMVisible={setIsEMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />

      <Activity
        isAMVisible={isAMVisible}
        setIsAMVisible={setIsAMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <OnActivityModal
        isAMVisible={isAMVisible}
        setIsAMVisible={setIsAMVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
        careerData={careerData}
        setCareerData={setCareerData}
      />
      <Devlogram />
      <SaveSection
        buttonRef={buttonRef}
        injection={injection}
        isSaveBtnPressed={isSaveBtnPressed}
        setIsSaveBtnPressed={setIsSaveBtnPressed}
      />
      <OnSameModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCancel={handleCancel}
      />
    </div>
  );
}
