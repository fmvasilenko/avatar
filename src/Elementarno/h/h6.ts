import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h6: IH = (props, children) => {
  const root = createElement('h6', props, children);

  return root;
};

export default h6;
