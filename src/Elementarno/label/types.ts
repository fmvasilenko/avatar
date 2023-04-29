import { IChildren, IElementProps } from '../types';

interface ILabelProps extends IElementProps {
  for?: string;
}

interface ILabel {
  (props?: ILabelProps, children?: IChildren): HTMLElement;
}

export { ILabel, ILabelProps };
