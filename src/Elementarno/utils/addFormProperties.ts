/* eslint-disable no-param-reassign */
import { IFormElementProps } from '../types';

interface IAddFormProperties {
  (element: HTMLElement, props: IFormElementProps): HTMLElement;
}

/**
 * Adds Form Element properties to given HTMLElement
 */

const addFormProperties: IAddFormProperties = (element, props) => {
  const {
    autofocus,
    disabled,
    form,
    formaction,
    formenctype,
    formmethod,
    formnovalidate,
    formtarget,
    name,
    value,
  } = props;

  if (autofocus) element.autofocus = true;
  if (disabled) element.setAttribute('disabled', 'true');
  if (form) element.setAttribute('form', form);
  if (formaction) element.setAttribute('formAction', formaction);
  if (formenctype) element.setAttribute('formenctype', formenctype);
  if (formmethod) element.setAttribute('formmethod', formmethod);
  if (formnovalidate) element.setAttribute('formnovalidate', 'true');
  if (formtarget) element.setAttribute('formtarget', formtarget);
  if (name) element.setAttribute('name', name);
  if (value) element.setAttribute('value', value);

  return element;
};

export default addFormProperties;
