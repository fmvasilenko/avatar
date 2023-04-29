interface IAttributes {
  [key: string]: string;
}

interface IAddDataAttributes {
  (element: HTMLElement, attributes: IAttributes): HTMLElement;
}

/**
 * Adds data attributes to given HTMLElement
 * @element given HTMLElement
 * @attributes a map Object with data attributes { "data-test-id": "my-test-id" }
 */

const addDataAttributes: IAddDataAttributes = (element, attributes) => {
  Object.keys(attributes).forEach((key) => {
    if (!key.startsWith('data-')) return;

    element.setAttribute(key, attributes[key]);
  });

  return element;
};

export default addDataAttributes;
