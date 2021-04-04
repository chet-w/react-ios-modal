import { useCallback, useEffect } from "react";

const useKeyBinding = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  dependencies = []
): void => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === key) {
        callback(event);
      }
    },
    [key, callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, handleKeyDown]);
};

export default useKeyBinding;
