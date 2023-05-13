import addFormProperties from '../utils/addFormProperties';
import createElement from '../utils/createElement';
import { IInput } from './types';

const input: IInput = (props, children) => {
  const root = createElement('input', props, children);

  if (props) {
    const {
      type,
      accept,
      autocomplete,
      checked,
      inputmode,
      list,
      max,
      maxlength,
      min,
      minlength,
      multiple,
      pattern,
      placeholder,
      readonly,
      required,
      size,
      spellcheck,
      src,
      step,
      onchange,
    } = props;

    addFormProperties(root, props);

    if (type) root.setAttribute('type', type);
    if (accept) root.setAttribute('accept', accept);
    if (autocomplete) root.setAttribute('autocomplete', autocomplete);
    if (checked) root.setAttribute('checked', 'true');
    if (inputmode) root.inputMode = inputmode;
    if (list) root.setAttribute('list', list);
    if (max) root.setAttribute('max', max);
    if (maxlength) root.setAttribute('maxlength', maxlength);
    if (min) root.setAttribute('min', min);
    if (minlength) root.setAttribute('minlength', minlength);
    if (multiple) root.setAttribute('multiple', 'true');
    if (pattern) root.setAttribute('pattern', pattern);
    if (placeholder) root.setAttribute('placeholder', placeholder);
    if (readonly) root.setAttribute('readonly', 'true');
    if (required) root.setAttribute('required', 'true');
    if (size) root.setAttribute('size', size);
    if (spellcheck) root.setAttribute('spellcheck', 'true');
    if (src) root.setAttribute('src', src);
    if (step) root.setAttribute('step', String(step));
    if (onchange) root.onchange = onchange;
  }

  return root;
};

export default input;
