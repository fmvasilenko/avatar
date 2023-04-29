import { IElementProps } from '../types';

interface IImgProps extends IElementProps {
  alt?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
  decoding?: 'sync' | 'async' | 'auto';
  ismap?: boolean;
  src?: string;
}

interface IImg {
  (props?: IImgProps): HTMLElement;
}

export { IImg, IImgProps };
