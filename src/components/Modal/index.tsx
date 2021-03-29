import * as S from "./styles";
import { ModalProps } from "./types";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const Modal = (props: ModalProps) => {
  return (
    <S.Modal
      variants={S.variants}
      transition={S.transition}
      initial="closed"
      animate="open"
      exit="closed"
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
