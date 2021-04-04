import { useEffect } from "react";

const useScrollFreeze = (target: HTMLElement = document.body): void => {

  const freeze = (target: HTMLElement) => {
    target.style.overflow = "hidden";
    target.style.height = "100vh";
  };

  const unfreeze = (target: HTMLElement) => {
    target.style.overflow = "";
    target.style.height = "";
  };

  useEffect(() => {
    freeze(target);
    return () => unfreeze(target);
  }, [target]);
};

export default useScrollFreeze;
