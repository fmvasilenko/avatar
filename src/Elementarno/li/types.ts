import { IChildren, IElementProps } from '../types';

interface ILiProps extends IElementProps {
  value?: string;
}

interface ILi {
  (props?: ILiProps, children?: IChildren): HTMLElement;
}

// eslint-disable-next-line import/prefer-default-export
export { ILi };
