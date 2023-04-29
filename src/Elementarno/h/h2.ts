import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h2: IH = (props, children) => {
  const root = createElement('h2', props, children);

  return root;
};

export default h2;
