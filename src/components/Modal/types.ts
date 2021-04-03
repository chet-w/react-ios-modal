import { ReactElement } from "react";

export interface ModalProps {
  title: string;
  children?: JSX.Element[] | JSX.Element;
  closable?: boolean
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  clickOutsideToClose?: boolean;
  id: string;
}
