import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Loader from "./Loader";
import {
  preloadInitialAssets,
  waitForFonts,
  waitForWindowLoad,
} from "./utils/preloadAssets";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    let loaderTimer;

    const minimumLoaderDuration = new Promise((resolve) => {
      loaderTimer = window.setTimeout(resolve, 6000);
    });

    Promise.all([
      minimumLoaderDuration,
      waitForWindowLoad(),
      waitForFonts(),
      preloadInitialAssets(),
    ]).then(() => {
      if (!isCancelled) {
        window.requestAnimationFrame(() => {
          setIsLoading(false);
        });
      }
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(loaderTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
          <HireMe />
        </div>
        {isLoading && <Loader />}
      </>
    </BrowserRouter>
  );
};

export default App;
