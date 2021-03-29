import { ReactElement } from "react";
import { FooterOptions } from "../Footer/types";

export interface ModalProps {
  title: string;
  children: ReactElement;
  closable?: boolean
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  clickOutsideToClose?: boolean;
  footerOptions?: FooterOptions;
}
