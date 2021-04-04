export interface HeaderProps {
  title: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  closable?: boolean;
  id: string;
}
