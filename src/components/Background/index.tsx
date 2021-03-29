import * as S from "./styles";
import { BackgroundProps } from "./types";

const Background = (backgroundProps: BackgroundProps) => {
  return (
    <S.Background
      {...backgroundProps}
      variants={S.animations}
      initial="closed"
      animate="open"
      exit="closed"
    />
  );
};

export default Background;
