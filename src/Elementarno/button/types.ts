import { IChildren, IFormElementProps } from '../types';

interface IButtonProps extends IFormElementProps {
  type?: 'button' | 'submit' | 'reset' | 'menu';
  onclick?: () => void;
}

interface IButton {
  (props?: IButtonProps, children?: IChildren): HTMLElement;
}

export { IButton, IButtonProps };
