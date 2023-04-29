import { button, div, p } from '../../Elementarno';

type ToolPanelItemOption = {
  [key: string]: string;
};

type ToolPanelItemConfig = {
  [key: string]: ToolPanelItemOption;
};

type ToolPanelItemProps = {
  container: HTMLElement;
  name: string;
  config: ToolPanelItemConfig;
  updateCallback: (name: string, url: string) => void;
};

class ToolPanelItem {
  private container: HTMLElement;

  private name: string;

  private config: ToolPanelItemConfig;

  private update: () => void;

  private itemOptions: string[];

  private itemColors: string[];

  private pickedOptionIndex = 0;

  private pickedColor: string;

  constructor({
    container,
    name,
    config,
    updateCallback,
  }: ToolPanelItemProps) {
    this.container = container;
    this.name = name;
    this.config = config;
    this.update = () => updateCallback(name, this.getCurrentUrl());

    this.itemOptions = Object.keys(this.config);
    this.itemColors = Object.keys(this.config[this.itemOptions[0]]);
    [this.pickedColor] = this.itemColors;

    this.render();
  }

  private render() {
    const root = div({ className: 'ToolPanel__group' });
    const title = p({ className: 'ToolPanel__title' }, [this.name]);
    const buttons = this.itemOptions.length > 1 ? this.renderButtons() : null;
    const colors = this.itemColors.length > 1 ? this.renderColors() : null;

    root.append(title);
    if (buttons) root.append(buttons);
    if (colors) root.append(colors);
    this.container.append(root);
  }

  private renderButtons() {
    const root = div({ className: 'ToolPanel__buttons' });

    const previusButton = button({
      className: 'ToolPanel__prevButton',
      onclick: () => {
        this.previousOption();
      },
    }, ['<']);

    const nextButton = button({
      className: 'ToolPanel__nextButton',
      onclick: () => {
        this.nextOption();
      },
    }, ['>']);

    root.append(previusButton);
    root.append(nextButton);

    return root;
  }

  private renderColors() {
    const root = div({ className: 'ToolPanel__colorPicker' });

    this.itemColors.forEach((color) => {
      const colorCircle = div({ className: 'ToolPanel__colorCircle' });
      colorCircle.setAttribute('style', `background: ${color}`);
      colorCircle.onclick = () => this.setColor(color);

      root.append(colorCircle);
    });

    return root;
  }

  private nextOption() {
    if (this.pickedOptionIndex === this.itemOptions.length - 1) this.pickedOptionIndex = 0;
    else this.pickedOptionIndex += 1;

    this.update();
  }

  private previousOption() {
    if (this.pickedOptionIndex === 0) this.pickedOptionIndex = this.itemOptions.length - 1;
    else this.pickedOptionIndex -= 1;

    this.update();
  }

  private setColor(color: string) {
    this.pickedColor = color;
    this.update();
  }

  private getCurrentUrl() {
    return this.config[this.itemOptions[this.pickedOptionIndex]][this.pickedColor];
  }
}

export default ToolPanelItem;
