export interface ModalContextProps {
  isOpen: boolean;
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children?: JSX.Element;
}
