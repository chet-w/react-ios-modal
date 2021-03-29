import * as S from "./styles";
import { ModalProps } from "./types";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const Modal = (props: ModalProps) => {
  return (
    <S.Background>
      <S.Modal>
        <Header
          title={props.title}
          closable={props.closable}
          onClose={props.onClose}
        />
        <Body>{props.children}</Body>
        {props.footerOptions && <Footer options={props.footerOptions} />}
      </S.Modal>
    </S.Background>
  );
};

export default Modal;
