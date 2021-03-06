import { useEffect, useState } from "react";
import { modalTheme } from "../../components/Theme";
import { DeviceSize, ViewportSizeData } from "./types";

const VIEWPORT_SIZES = modalTheme.breakpoints;

const useViewportSize = (): ViewportSizeData => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("sm");
  const [width, setWidth] = useState(VIEWPORT_SIZES.sm);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;

      if (innerWidth > VIEWPORT_SIZES.xs) {
        setDeviceSize("xs");
      }
      if (innerWidth > VIEWPORT_SIZES.sm) {
        setDeviceSize("xs");
      }
      if (innerWidth > VIEWPORT_SIZES.md) {
        setDeviceSize("md");
      }
      if (innerWidth > VIEWPORT_SIZES.lg) {
        setDeviceSize("lg");
      }

      setWidth(innerWidth);
      setHeight(innerHeight);
      setIsMobile(innerWidth < VIEWPORT_SIZES.md);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    deviceSize,
    width,
    height,
    isMobile
  };
};

export default useViewportSize;
