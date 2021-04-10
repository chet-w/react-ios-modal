import { AnimatePresence } from "framer-motion";
import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { ThemeProvider } from "styled-components";
import Background from "../Background";
import { modalTheme } from "../Theme";
import {
  ModalContextProps,
  ModalProviderProps,
  ToggleBorderRadiusOptions
} from "./types";
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
  const LastFocusedElement = useRef<null | HTMLElement>(null);
  const Wrapper = useRef<null | HTMLDivElement>(null);

  const { isMobile } = useViewportSize();

  useEffect(() => {
    setIsOpen(Boolean(Modal));
  }, [Modal]);

  const openModal = useCallback(
    (modal: ReactElement) => {
      LastFocusedElement.current = document.activeElement as HTMLElement;
      setModal(modal);
      if (Wrapper.current?.firstElementChild) {
        toggleBorderRadius({
          target: Wrapper.current.firstElementChild as HTMLElement,
          apply: isMobile
        });
      }
    },
    [setModal, isMobile]
  );

  const toggleBorderRadius = ({ target, apply }: ToggleBorderRadiusOptions) => {
    target.style.borderRadius = apply ? "16px 16px 0 0" : "";
  };

  const closeModal = useCallback(() => {
    setModal(null);
    LastFocusedElement.current?.focus();
    if (Wrapper.current?.firstElementChild) {
      toggleBorderRadius({
        target: Wrapper.current.firstElementChild as HTMLElement
      });
    }
  }, [setModal]);

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
          ref={Wrapper}
        >
          {children}
        </S.MainWrapper>
        <AnimatePresence>
          {Modal && <Background isMobile={isMobile}>{Modal}</Background>}
        </AnimatePresence>
      </ThemeProvider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
