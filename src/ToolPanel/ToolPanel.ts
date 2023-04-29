import { div } from '../Elementarno';
import { Elements } from '../elements_3';
import ToolPanelItem from './Item/ToolPanelItem';

type UpdateCallback = (name: string, url: string) => void;

class ToolPanel {
  private container: HTMLElement;

  private elements: Elements;

  private update: UpdateCallback;

  private toolPanelItems: ToolPanelItem[] = [];

  constructor(container: HTMLElement, elements: Elements, update: UpdateCallback) {
    this.container = container;
    this.elements = elements;
    this.update = update;

    this.render();
  }

  private render() {
    const root = div({ className: 'ToolPanel' });

    Object.entries(this.elements).forEach((element) => {
      const [name, config] = element;

      this.toolPanelItems.push(new ToolPanelItem({
        container: root,
        name,
        config,
        updateCallback: this.update,
      }));
    });

    this.container.append(root);
  }
}

export default ToolPanel;
