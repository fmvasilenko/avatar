import { IChildren } from '../types';

interface IAppendChildren {
  (element: HTMLElement, children: IChildren): HTMLElement;
}

/**
 * Appends the list of children to given HTMLElement
 */

const appendChildren: IAppendChildren = (element, children) => {
  children.forEach((child) => {
    element.append(child);
  });

  return element;
};

export default appendChildren;
