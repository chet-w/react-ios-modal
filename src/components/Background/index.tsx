import useViewportSize from "../../hooks/useViewportSize";
import * as S from "./styles";
import { BackgroundProps } from "./types";

const Background = (backgroundProps: BackgroundProps) => {
  const { isMobile } = useViewportSize();

  return (
    <S.Background
      {...backgroundProps}
      variants={isMobile ? S.mobileVariants : S.variants}
      initial="closed"
      animate="open"
      exit="closed"
    />
  );
};

export default Background;
