import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h1: IH = (props, children) => {
  const root = createElement('h1', props, children);

  return root;
};

export default h1;
