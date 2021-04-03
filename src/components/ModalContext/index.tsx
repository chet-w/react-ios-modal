import { AnimatePresence } from "framer-motion";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from "react";
import { ThemeProvider } from "styled-components";
import Background from "../Background";
import { modalTheme } from "../Theme";
import { ModalContextProps, ModalProviderProps } from "./types";
import * as S from "./styles";
import { useViewportSize } from "../../hooks";

const ModalContext = createContext<ModalContextProps>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Modal, setModal] = useState<null | ReactElement>(null);

  const { isMobile } = useViewportSize();

  useEffect(() => {
    setIsOpen(Boolean(Modal));
  }, [Modal]);

  const openModal = (modal: ReactElement) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal
      }}
    >
      <ThemeProvider theme={modalTheme}>
        <S.MainWrapper
          variants={isMobile ? S.variants : undefined}
          initial="normal"
          animate={isOpen ? "pushed" : "normal"}
          transition={{
            duration: 0.3
          }}
        >
          {children}
        </S.MainWrapper>
        <AnimatePresence>
          {Modal && <Background>{Modal}</Background>}
        </AnimatePresence>
      </ThemeProvider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
