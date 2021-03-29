import * as S from "./styles";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onClose && props.onClose(event);
  };

  return (
    <S.Header>
      <S.Title>{props.title}</S.Title>
      <S.CloseButton onClick={(event) => handleClose(event)}>
        &times;
      </S.CloseButton>
    </S.Header>
  );
};

export default Header;
