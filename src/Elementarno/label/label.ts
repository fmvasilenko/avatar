import createElement from '../utils/createElement';
import { ILabel } from './types';

const label: ILabel = (props, children) => {
  const root = createElement('label', props, children);

  if (props) {
    if (props.for) root.setAttribute('for', props.for);
  }

  return root;
};

export default label;
