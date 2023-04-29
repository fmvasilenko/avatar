import addFormProperties from '../utils/addFormProperties';
import createElement from '../utils/createElement';
import { ITextArea } from './types';

const textarea: ITextArea = (props, children) => {
  const root = createElement('textarea', props, children);

  if (props) {
    const {
      autocomplete,
      cols,
      maxlength,
      minlength,
      placeholder,
      readonly,
      required,
      rows,
      spellcheck,
      wrap,
    } = props;

    addFormProperties(root, props);

    if (autocomplete) root.setAttribute('autocomplete', autocomplete);
    if (cols) root.setAttribute('cols', String(cols));
    if (maxlength) root.setAttribute('maxlength', String(maxlength));
    if (minlength) root.setAttribute('minlength', String(minlength));
    if (placeholder) root.setAttribute('placeholder', placeholder);
    if (readonly) root.setAttribute('readonly', 'true');
    if (required) root.setAttribute('required', 'true');
    if (rows) root.setAttribute('rows', String(rows));
    if (spellcheck) root.setAttribute('spellcheck', spellcheck);
    if (wrap) root.setAttribute('wrap', wrap);
  }

  return root;
};

export default textarea;
