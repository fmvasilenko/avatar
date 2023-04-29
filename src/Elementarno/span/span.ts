import { IElement as ISpan } from '../types';
import createElement from '../utils/createElement';

const span: ISpan = (props, children) => {
  const root = createElement('span', props, children);

  return root;
};

export default span;
