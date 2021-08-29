import Head from "next/head";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { Divider } from "antd";
import { useState, useEffect } from "react";

export default function Home() {
  const size = useWindowSize();
  const [themeSwitchChecked, setthemeSwitchChecked] = useState(false);

  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }
  return (
    <>
      <Head>
        <title>/setting - mysetting</title>
      </Head>
      <Navbar width={size.width} themeSwitchChecked={themeSwitchChecked} setthemeSwitchChecked={setthemeSwitchChecked} />
      <Body width={size.width} />
      <Footer />
    </>
  );
}
