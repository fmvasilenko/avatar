import { IChildren, IElementProps } from '../types';

type IReferrerPolicy = 'no-referrer'
| 'no-referrer-when-downgrade'
| 'origin'
| 'origin-when-cross-origin'
| 'same-origin'
| 'strict-origin'
| 'strict-origin-when-cross-origin'
| 'unsafe-url';

interface IAProps extends IElementProps {
  download?: boolean | string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: IReferrerPolicy;
  rel?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  type?: string;
}

interface IA {
  (props?: IAProps, children?: IChildren): HTMLElement;
}

export { IA, IAProps };
