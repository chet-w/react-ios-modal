import * as S from "./styles";
import { BackgroundProps } from "./types";

const Background = (props: BackgroundProps) => {
  return (
    <S.Background
      {...props}
      variants={props.isMobile ? S.mobileVariants : S.variants}
      initial="closed"
      animate="open"
      exit="closed"
    />
  );
};

export default Background;
