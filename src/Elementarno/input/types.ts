import { IChildren, IFormElementProps } from '../types';

type IInputType = 'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week';

type IInputMode = 'verbatim'
| 'latin'
| 'latin-name'
| 'latin-prose'
| 'full-width-latin'
| 'kana'
| 'katakana'
| 'numeric'
| 'tel'
| 'email'
| 'url';

interface IInputProps extends IFormElementProps {
  type?: IInputType;
  accept?: string;
  autocomplete?: 'on' | 'off';
  checked?: boolean;
  inputmode?: IInputMode;
  list?: string;
  max?: string;
  maxlength?: string;
  min?: string;
  minlength?: string;
  multiple?: boolean;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: string;
  spellcheck?: boolean;
  src?: string;
  step?: number;
  onchange?: (event: Event) => void;
}

interface IInput {
  (props?: IInputProps, children?: IChildren): HTMLElement;
}

export { IInput, IInputProps };
