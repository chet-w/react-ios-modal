export interface FooterProps {
  options: FooterOptions;
}

export type FooterOptions = [FooterOption, FooterOption, FooterOption];

export interface FooterOption
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}
