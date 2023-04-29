import { IElement as IH } from '../types';
import createElement from '../utils/createElement';

const h5: IH = (props, children) => {
  const root = createElement('h5', props, children);

  return root;
};

export default h5;
