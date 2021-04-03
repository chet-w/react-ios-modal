export type DeviceSize = "xs" | "sm" | "md" | "lg";

export interface ViewportSizeData {
  deviceSize: DeviceSize;
  width: number;
  height: number;
  isMobile: boolean;
};