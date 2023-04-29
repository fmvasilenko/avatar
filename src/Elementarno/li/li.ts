import createElement from '../utils/createElement';
import { ILi } from './types';

const li: ILi = (props, children) => {
  const root = createElement('li', props, children);

  if (props) {
    const { value } = props;

    if (value) root.setAttribute('value', value);
  }

  return root;
};

export default li;
