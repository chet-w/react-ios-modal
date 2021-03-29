import * as S from "./styles";
import { ModalProps } from "./types";

import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const Modal = (props: ModalProps) => {
  return (
    <S.Background>
      <S.Modal>
        <Header title="A modal" />
        <Body>{props.children}</Body>
        <Footer />
      </S.Modal>
    </S.Background>
  );
};

export default Modal;
