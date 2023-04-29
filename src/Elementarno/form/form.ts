import createElement from '../utils/createElement';
import { IForm } from './types';

const form: IForm = (props, children) => {
  const root = createElement('form', props, children);

  if (props) {
    const {
      acceptCharset,
      autocomplete,
      name,
      rel,
      action,
      enctype,
      method,
      novalidate,
      target,
    } = props;

    if (acceptCharset) root.setAttribute('acceptCharset', acceptCharset);
    if (autocomplete) root.setAttribute('autocomplete', autocomplete);
    if (name) root.setAttribute('name', name);
    if (rel) root.setAttribute('rel', rel);
    if (action) root.setAttribute('action', action);
    if (enctype) root.setAttribute('enctype', enctype);
    if (method) root.setAttribute('method', method);
    if (novalidate) root.setAttribute('novalidate', 'true');
    if (target) root.setAttribute('target', target);
  }

  return root;
};

export default form;
