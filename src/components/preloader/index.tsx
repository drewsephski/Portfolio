"use client";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import React from "react";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
} from "react";


import Loader from "./loader";


type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const PreloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
const LOADING_TIME = 2.5;
function Preloader({ children }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const loadingTween = useRef<gsap.core.Tween>();

  const bypassLoading = () => {
    loadingTween.current?.progress(0.99).kill();
    setLoadingPercent(100);
    setIsLoading(false);
    // console.log("killed", loadingTween.current);
  };
  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });
  useEffect(() => {
    loadingTween.current = gsap.to(loadingPercentRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "slow(0.7,0.7,false)",
      onUpdate: () => {
        setLoadingPercent(loadingPercentRef.current.value);
      },
      onComplete: () => {
        setIsLoading(false);
        // observe: this change has not been observed for errors.
        // window.scrollTo(0, 0);
      },
    });
  }, []);

  return (
    <PreloaderContext.Provider
      value={{ isLoading, bypassLoading, loadingPercent }}
    >
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  );
}

export default Preloader;
