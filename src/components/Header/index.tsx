import { useModal } from "../ModalContext";
import * as S from "./styles";
import { HeaderProps } from "./types";

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
      <S.CloseButton onClick={(event) => handleClose(event)}>
        &times;
      </S.CloseButton>
    </S.Header>
  );
};

export default Header;
