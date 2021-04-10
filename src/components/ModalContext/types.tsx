export interface ModalContextProps {
  isOpen: boolean;
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children?: JSX.Element;
}

export interface ToggleBorderRadiusOptions {
  target: HTMLElement;
  apply?: boolean;
}
