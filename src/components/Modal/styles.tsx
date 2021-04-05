import styled from "styled-components";
import { motion } from "framer-motion";

export const Modal = styled(motion.section)`
  width: 720px;
  min-height: 75vh;
  /* height: calc(100% - 32px); */
  height: 100%;
  background: white;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  margin: 12.5vh auto 0 auto;
  border-radius: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    height: calc(100% - 32px);
    height: 100%;
    margin: 32px auto 0 auto;
    border-radius: 16px 16px 0 0;
  }

  *:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

export const variants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 400,
    opacity: 0
  }
};

export const transition = {
  damping: 20,
  restDelta: 0.001,
  stiffness: 180,
  type: "spring"
};
