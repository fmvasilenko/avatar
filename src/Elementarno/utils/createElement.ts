import { IChildren, IElementProps, ITag } from '../types';
import addProperties from './addProperties';
import appendChildren from './appendChildren';

interface ICreateElement {
  (tag: ITag, props?: IElementProps, children?: IChildren): HTMLElement;
}

/**
 * Creates an element with given tag name, properties and children.
 * > Note! It only adds basic properties. All the custom ones whould be added manually
 */

const createElement: ICreateElement = (tag, props, children) => {
  const root = document.createElement(tag);

  if (props) addProperties(root, props);
  if (children) appendChildren(root, children);

  return root;
};

export default createElement;
