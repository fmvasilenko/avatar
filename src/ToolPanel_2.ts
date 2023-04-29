/* eslint-disable max-len */
import Counter from './Counter';
import { button, div, p } from './Elementarno';
import GroupPanel from './GroupPanel';
import {
  Elements,
  IArray,
  IColor,
  IGroup,
} from './elements_2';

type UpdateFunction = (name: string, url: string) => void;

class ToolPanel {
  private container: HTMLElement;

  private elements: Elements;

  private update: UpdateFunction;

  constructor(container: HTMLElement, elements: Elements, update: UpdateFunction) {
    this.container = container;
    this.elements = elements;
    this.update = update;
    this.render();
  }

  private render() {
    const root = div({ className: 'ToolPanel' });

    Object.entries(this.elements).forEach((element) => {
      const [name, content] = element;
      const groupContainer = div({ className: 'ToolPanel__group' });
      const title = p({ className: 'ToolPanel__title' }, [name]);

      groupContainer.append(title);

      if (content.type === 'group') this.renderGroupPanel(groupContainer, content, name);
      if (content.type === 'color') this.renderColorsPanel(groupContainer, content, name);
      if (content.type === 'array') this.renderArrayPanel(groupContainer, content, name);

      root.append(groupContainer);
    });

    this.container.append(root);
  }

  /*
    hair: {
      type: 'group',
      elements: {
        short: {
          type: 'color',
          elements: {
            '#fs8ad1': 'short_hair_blond.svg',
          },
        },
        long: {
          type: 'color',
          elements: {
            '#doa81c': 'long_hair_blond.svg',
          },
        },
      },
    },
  */

  private renderGroupPanel(container: HTMLElement, content: IGroup, groupName: string) {
    const groupPanel = new GroupPanel(container, content, (url: string) => {
      this.update(groupName, url);
    });
  }

  /*
    background: {
      type: 'color',
      elements: {
        '#de34fs': 'background.svg',
      },
    },
  */

  private renderColorsPanel(container: HTMLElement, content: IColor, groupName: string) {
    const root = div({ className: 'ToolPanel__colorPicker' });
    const { elements } = content;

    Object.entries(elements).forEach((element) => {
      const [color, url] = element;
      const colorCircle = div({ className: 'ToolPanel__colorCircle' });
      colorCircle.setAttribute('style', `background: ${color}`);

      colorCircle.onclick = () => {
        this.update(groupName, url);
      };

      root.append(colorCircle);
    });

    container.append(root);
  }

  /*
    nose: {
      type: 'array',
      elements: [
        'nose_1.svg',
      ],
    },
  */

  private renderArrayPanel(container: HTMLElement, content: IArray, groupName: string) {
    const root = div({ className: 'ToolPanel__buttons' });
    const { elements } = content;
    const counter = new Counter(elements.length - 1);

    const prevButton = button({
      className: 'ToolPanel__prevButton',
      onclick: () => {
        counter.previous();
        this.update(groupName, elements[counter.get()]);
      },
    }, ['<']);

    const nextButton = button({
      className: 'ToolPanel__nextButton',
      onclick: () => {
        counter.next();
        this.update(groupName, elements[counter.get()]);
      },
    }, ['>']);

    root.append(prevButton);
    root.append(nextButton);

    container.append(root);
  }
}

export default ToolPanel;
