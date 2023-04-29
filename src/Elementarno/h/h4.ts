import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h4: IH = (props, children) => {
  const root = createElement('h4', props, children);

  return root;
};

export default h4;
