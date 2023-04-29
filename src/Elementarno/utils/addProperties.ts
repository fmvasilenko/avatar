/* eslint-disable no-param-reassign */
import { IElementProps } from '../types';

interface IAddProperties {
  (element: HTMLElement, props: IElementProps): HTMLElement;
}

/**
 * Adds basic properties to given HTMLElement
 */

const addProperties: IAddProperties = (element, props) => {
  const {
    accessKey,
    className,
    contenteditable,
    dir,
    draggable,
    dropzone,
    hidden,
    id,
    tabindex,
    title,
    translate,
  } = props;

  if (accessKey) element.accessKey = accessKey;
  if (className) element.className = className;
  if (contenteditable) element.setAttribute('contenteditable', 'true');
  if (dir) element.dir = dir;
  if (draggable) element.draggable = draggable;
  if (dropzone) element.setAttribute('dropzone', dropzone);
  if (hidden) element.hidden = hidden;
  if (id) element.id = id;
  if (tabindex) element.tabIndex = tabindex;
  if (title) element.title = title;
  if (translate !== undefined) element.translate = translate;

  return element;
};

export default addProperties;
