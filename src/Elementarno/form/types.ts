import { IChildren, IElementProps } from '../types';

interface IFormProps extends IElementProps {
  acceptCharset?: string;
  autocomplete?: 'on' | 'off';
  name?: string;
  rel?: string;
  action?: string;
  enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  method?: 'get' | 'post' | 'dialog';
  novalidate?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

interface IForm {
  (props?: IFormProps, children?: IChildren): HTMLElement;
}

export { IForm, IFormProps };
