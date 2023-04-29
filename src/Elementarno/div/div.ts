import { IElement as IDiv } from '../types';
import createElement from '../utils/createElement';

const div: IDiv = (props, children) => {
  const root = createElement('div', props, children);

  return root;
};

export default div;
