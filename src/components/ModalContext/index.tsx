import { AnimatePresence } from "framer-motion";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from "react";
import { ModalContextProps, ModalProviderProps } from "./types";

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
      {children}
      <AnimatePresence>{Modal}</AnimatePresence>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
