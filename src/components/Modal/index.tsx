import * as S from "./styles";
import { ModalProps } from "./types";

import Header from "../Header";
import Body from "../Body";
import { useModal } from "../ModalContext";
import { PanInfo } from "framer-motion";
import { useFocusTrap, useViewportSize } from "../../hooks";
import { useRef } from "react";

const Modal = (props: ModalProps) => {
  const ModalRef = useRef(null);
  const { closeModal } = useModal();
  const { height } = useViewportSize();
  useFocusTrap(ModalRef);

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
      ref={ModalRef}
    >
      <Header
        title={props.title}
        closable={props.closable}
        onClose={props.onClose}
      />
      <Body>{props.children}</Body>
    </S.Modal>
  );
};

export default Modal;
