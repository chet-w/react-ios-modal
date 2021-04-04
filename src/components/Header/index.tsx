import { useModal } from "../ModalContext";
import * as S from "./styles";
import { HeaderProps } from "./types";
import { X } from "phosphor-react";

const Header = (props: HeaderProps) => {
  const { closeModal } = useModal();

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    closeModal();
    props.onClose && props.onClose(event);
  };

  return (
    <S.Header>
      <S.Title id={props.id} tabIndex={0}>
        {props.title}
      </S.Title>
      <S.CloseButton
        onClick={(event) => handleClose(event)}
        aria-label="Close modal"
      >
        <X size={24} weight="bold" />
      </S.CloseButton>
    </S.Header>
  );
};

export default Header;
