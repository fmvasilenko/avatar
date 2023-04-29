import { IElement as IP } from '../types';
import createElement from '../utils/createElement';

const p: IP = (props, children) => {
  const root = createElement('p', props, children);

  return root;
};

export default p;
