/* eslint-disable max-len */
import { div, img } from './Elementarno';
import Layers from './Layers_2';
import SVG from './SVG';

class ToolPanel {
  private container: HTMLElement;

  private elements: IElements;

  private layers: Layers;

  private svg: SVG;

  constructor(container: HTMLElement, elements: IElements, layers: Layers, svg: SVG) {
    this.container = container;
    this.elements = elements;
    this.layers = layers;
    this.svg = svg;
    this.render();
  }

  private render() {
    const root = div({ className: 'ToolPanel' });

    Object.entries(this.elements).forEach((group) => this.renderElementsGroup(root, group[1], group[0]));

    this.container.append(root);
  }

  private renderElementsGroup(container: HTMLElement, elements: string[], groupName: string) {
    const root = div({ className: 'ToolPanel__group' });
    if (elements.length > 1) elements.forEach((element) => this.renderElement(root, element, groupName));
    container.append(root);
  }

  private renderElement(container: HTMLElement, src: string, groupName: string) {
    const image = new Image();
    image.src = src;
    image.classList.add('ToolPanel__element');
    image.onclick = () => {
      console.log('click');
      this.layers.set({
        name: groupName,
        url: src,
      });

      this.svg.update();
    };

    container.append(image);
  }
}

export default ToolPanel;
