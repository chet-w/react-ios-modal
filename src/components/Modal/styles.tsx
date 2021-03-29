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
`;

export const Modal = styled(motion.section)`
  width: 720px;
  min-height: 75vh;
  background: white;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  margin-top: 12.5vh;
  border-radius: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
