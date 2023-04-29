import addFormProperties from '../utils/addFormProperties';
import createElement from '../utils/createElement';
import { IButton } from './types';

const button: IButton = (props, children) => {
  const root = createElement('button', props, children);

  if (props) {
    const {
      type,
      onclick,
    } = props;

    addFormProperties(root, props);

    if (onclick) root.onclick = onclick;

    root.setAttribute('type', type || 'button');
  }

  return root;
};

export default button;
