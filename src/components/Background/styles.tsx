import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: -1;
`;

export const animations = {
  closed: {
    backdropFilter: "none"
  },
  open: {
    backdropFilter: "blur(5px)"
  }
};
