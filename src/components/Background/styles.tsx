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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10000;
`;

export const variants = {
  closed: {
    backdropFilter: "none",
    background: "rgba(255, 255, 255, 0)"
  },
  open: {
    backdropFilter: "blur(5px)",
    background: "rgba(255, 255, 255, 0.5)"
  }
};

export const mobileVariants = {
  closed: {
    background: "rgba(0, 0, 0, 0)"
  },
  open: {
    background: "rgba(0, 0, 0, 0.5)"
  }
};
