import { useCallback, useEffect } from "react";

const useClickOutside = (elementRef: React.MutableRefObject<null | HTMLElement>, callback: (event: MouseEvent) => void) => {

  const handleClick = useCallback((event: MouseEvent) => {
    const { target } = event;
    if (elementRef.current) {
      if (target !== elementRef.current && !elementRef.current.contains(target as Node)) {
        callback(event);
      }
    }
  }, [callback, elementRef]);

  useEffect(() => {
    document.addEventListener("click", (event) => handleClick(event));
    return () => document.removeEventListener("click", (event) => handleClick(event));
  }, [handleClick]);
};

export default useClickOutside;