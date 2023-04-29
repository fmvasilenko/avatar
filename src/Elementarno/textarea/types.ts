import { IChildren, IFormElementProps } from '../types';

interface ITextAreaProps extends IFormElementProps {
  autocomplete?: 'on' | 'off';
  cols?: number;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  spellcheck?: 'true' | 'default' | 'false';
  wrap?: 'hard' | 'soft' | 'off';
}

interface ITextArea {
  (props?: ITextAreaProps, children?: IChildren): HTMLElement;
}

export { ITextArea, ITextAreaProps };
