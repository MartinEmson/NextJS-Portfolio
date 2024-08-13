import "@/styles/globals.css";
import Header from "@/components/Header";
import { TransitionProvider } from "@/context/TransitionContext";
import Transition from "@/components/Transition";
import Lenis from "lenis";
import Intro from "@/components/Transition/Intro";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";

let lenis;

if (typeof window !== "undefined") {
  lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default function App({ Component, pageProps, router }) {
  const divRef = useRef(null); // define divRef using useRef

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect( () => {
  //   (
  //     async () => {
  //         setTimeout( () => {
  //           setIsLoading(false);
  //           window.scrollTo(0,0);
  //         }, 2000)
  //     }
  //   )()
  // }, [])

  return (
    <TransitionProvider>
      <Head>
        <title>Martin Lindevall - Designer & Developer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
        <meta
          name="description"
          content="This is my frontend portfolio. "
        ></meta>
      </Head>
      <Intro />
      <Header divRef={divRef} />

      <Transition>
        <Component key={router.route} {...pageProps} />
      </Transition>

      <Footer />
    </TransitionProvider>
  );
}
