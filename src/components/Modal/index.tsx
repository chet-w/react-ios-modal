import * as S from "./styles";
import { ModalProps } from "./types";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import { useModal } from "../ModalContext";
import { PanInfo } from "framer-motion";
import useViewportSize from "../../hooks/useViewportSize";

const Modal = (props: ModalProps) => {
  const { closeModal } = useModal();
  const { height } = useViewportSize();

  const CLOSE_ON_DRAG_TRESHHOLD = height / 2;

  const handleDragEnd = (dragInfo: PanInfo) => {
    const { offset } = dragInfo;
    if (offset.y > CLOSE_ON_DRAG_TRESHHOLD) {
      closeModal();
    }
  };

  return (
    <S.Modal
      variants={S.variants}
      transition={S.transition}
      initial="closed"
      animate="open"
      exit="closed"
      drag="y"
      dragConstraints={{ top: 5, bottom: 5 }}
      dragElastic={{ top: 0.05, bottom: 0.1 }}
      onDragEnd={(_, info) => handleDragEnd(info)}
    >
      <Header
        title={props.title}
        closable={props.closable}
        onClose={props.onClose}
      />
      <Body>{props.children}</Body>
      {props.footerOptions && <Footer options={props.footerOptions} />}
    </S.Modal>
  );
};

export default Modal;
