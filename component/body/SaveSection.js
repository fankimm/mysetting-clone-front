import styles from "../../styles/Body.module.css";
import { useRef, useEffect, useState } from "react";
import { Button } from "antd";
export default function SaveSection(props) {
  // const staticStyle={
  //   "margin": "auto",
  //   margin-top: "17.5px",
  //   margin-bottom: "35px"
  // }
  const buttonRef = useRef(null);
  const [istBottomed,setIsBottomed] = useState(false)
  const [scrollState, setScrollState] = useState(0)
  function test(e) {
    return 0
    // console.log(e.srcElement.scrollingElement.scrollTop)
    // console.log(buttonRef.current.style.position)
    // console.log(scrollState)
    // console.log(istBottomed)
    
    // if(e.srcElement.scrollingElement.scrollTop>3700){


    //   buttonRef.current.style.position="relative"
    //   buttonRef.current.style.top="0"
    //   buttonRef.current.style.left="0"

      
    //   buttonRef.current.style.posotion="absolute"
    //   buttonRef.current.style.top="-100px"
      
    // }
    // if(e.srcElement.scrollingElement.scrollTop<3700){


    //   buttonRef.current.style.position="fixed"
    //   buttonRef.current.style.bottom="-700px"
    //   buttonRef.current.style.left="50px"
    // }
    //   buttonRef.current.style.posotion="fixed"
    //   buttonRef.current.style.top="300px"
      
    
  }
  // useEffect(() => {
    
  //   window.addEventListener("scroll", test);
  //   return () => {
  //     window.removeEventListener("scroll", test);
  //   };
  // }, []);
  
  return (
    <div className={styles.saveButtonContainer} ref={buttonRef}>
      <Button className={styles.saveButton} 
      
        block={true}
        icon={
          <img
            src="/svg/prefix/save.svg"
            width="14px"
            alt="save"
            style={{ marginRight: "8px" }}
          />
        }
        type="primary"
        className={styles.saveButton}
        onClick={() => {
          props.injection();
        }}
      >
        저장
      </Button>
    </div>
  );
}
