import { button, div, img } from './Elementarno';
import Layers from './Layers_2';
import SVG from './SVG';
import elements from './elements';
import elements_3 from './elements_3';
import ToolPanel from './ToolPanel/ToolPanel';

const container = document.createElement('div');
container.id = 'container';
container.classList.add('container');
document.body.append(container);

const render = (urls: string[]) => {
  container.innerHTML = '';

  urls.forEach((url) => {
    const image = new Image();
    image.src = url;
    image.classList.add('img');

    container.append(image);
  });
};

const layers = new Layers();
layers.set(Object.keys(elements).map((name) => ({
  name,
  url: elements[name as keyof IElements][0],
})));

const svg = new SVG(layers, render);

const update = (name: string, url: string) => {
  layers.update(name, 'url', url);
  svg.update();
};

// const toolPanel = new ToolPanel(document.body, elements, layers, svg);

const toolPanel = new ToolPanel(document.body, elements_3, update);

const saveButton = button({ onclick: () => svg.save(), className: 'button' }, ['Download']);
document.body.append(saveButton);
