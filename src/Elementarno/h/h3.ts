import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h3: IH = (props, children) => {
  const root = createElement('h3', props, children);

  return root;
};

export default h3;
