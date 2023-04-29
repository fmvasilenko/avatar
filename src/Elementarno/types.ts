type ITag = 'div'
| 'form'
| 'button'
| 'input'
| 'textarea'
| 'label'
| 'img'
| 'a'
| 'p'
| 'span'
| 'ul'
| 'li'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6';

interface IElementProps {
  accessKey?: string;
  className?: string;
  contenteditable?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  draggable?: boolean;
  dropzone?: 'copy' | 'move' | 'link';
  hidden?: boolean;
  id?: string;
  tabindex?: number;
  title?: string;
  translate?: boolean;
}

interface IFormElementProps extends IElementProps {
  autofocus?: boolean;
  disabled?: boolean;
  form?: string;
  formaction?: string;
  formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  formmethod?: 'post' | 'get';
  formnovalidate?: boolean;
  formtarget?: '_self' | '_blank' | '_parent' | '_top';
  name?: string;
  value?: string;
}

type IChildren = (HTMLElement | string)[];

interface IElement {
  (props?: IElementProps, chldren?: IChildren): HTMLElement;
}

export {
  ITag,
  IElementProps,
  IFormElementProps,
  IChildren,
  IElement,
};
