import { ReactElement } from "react";

export interface ModalProps {
  title: string;
  children: ReactElement;
  closable?: boolean
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  clickOutsideToClose?: boolean;
}
