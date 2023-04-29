import { IElement as IUl } from '../types';
import createElement from '../utils/createElement';

const ul: IUl = (props, children) => {
  const root = createElement('ul', props, children);

  return root;
};

export default ul;
