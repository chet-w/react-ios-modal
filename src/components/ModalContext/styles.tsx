import styled from "styled-components";
import { motion } from "framer-motion";

export const MainWrapper = styled(motion.div)`
  transform-origin: center;
  border-radius: 16px;
`;

export const variants = {
  normal: {
    scale: 1
  },
  pushed: {
    scale: 0.95
  }
};
