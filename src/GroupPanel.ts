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

import { button, div } from './Elementarno';
import { IGroup } from './elements_2';

type RenderFunction = (url: string) => void;

class GroupPanel {
  private container: HTMLElement;

  private group: IGroup;

  private types: string[];

  private colors: string[];

  private pickedType = 0;

  private pickedColor: string;

  private render: RenderFunction;

  constructor(container: HTMLElement, group: IGroup, render: RenderFunction) {
    this.container = container;
    this.group = group;
    this.render = render;
    this.types = Object.keys(group.elements);
    this.colors = Object.keys(group.elements[this.types[0]].elements);
    [this.pickedColor] = this.colors;

    this.renderTypesPanel();
    this.renderColorsPanel();
  }

  private nextType() {
    if (this.pickedType === this.types.length - 1) this.pickedType = 0;
    else this.pickedType += 1;
  }

  private previousType() {
    if (this.pickedType === 0) this.pickedType = this.types.length - 1;
    else this.pickedType -= 1;
  }

  private getType() {
    return this.types[this.pickedType];
  }

  renderTypesPanel() {
    const root = div({ className: 'ToolPanel__buttons' });

    const prevButton = button({
      className: 'ToolPanel__prevButton',
      onclick: () => {
        this.previousType();
        this.render(this.group.elements[this.types[this.pickedType]].elements[this.pickedColor]);
      },
    }, ['<']);

    const nextButton = button({
      className: 'ToolPanel__nextButton',
      onclick: () => {
        this.nextType();
        this.render(this.group.elements[this.types[this.pickedType]].elements[this.pickedColor]);
      },
    }, ['>']);

    root.append(prevButton);
    root.append(nextButton);

    this.container.append(root);
  }

  private renderColorsPanel() {
    const root = div({ className: 'ToolPanel__colorPicker' });

    this.colors.forEach((color) => {
      const colorCircle = div({ className: 'ToolPanel__colorCircle' });
      colorCircle.setAttribute('style', `background: ${color}`);

      colorCircle.onclick = () => {
        this.pickedColor = color;
        this.render(this.group.elements[this.types[this.pickedType]].elements[this.pickedColor]);
      };

      root.append(colorCircle);
    });

    this.container.append(root);
  }
}

export default GroupPanel;
