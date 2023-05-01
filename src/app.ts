import { button } from './Elementarno';
import Layers, { ILayer } from './Layers_2';
import SVG from './SVG';
import elements from './elements_3';
import ToolPanel from './ToolPanel/ToolPanel';
import updateEar from './utils/updateEar';
import updateText from './utils/updateText';
import updateLightOurPath from './utils/updateLightningOurPath';

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
layers.set(Object.entries(elements).map((element) => {
  const [name, value] = element;
  const { defaultDisplayed } = value;
  const firstType = Object.values(value.elements)[0];
  const firstColor = Object.values(firstType)[0];

  const layer: ILayer = {
    name,
    url: firstColor,
    displayed: defaultDisplayed,
  };

  if (name === 'face') {
    layer.onUrlUpdated = (url: string) => {
      layers.update('ear', 'url', updateEar(url));
    };
  }

  if (name === 'background') {
    layer.onUrlUpdated = (url: string) => {
      layers.update('text', 'url', updateText(url));
      layers.update('lightningOurPath', 'url', updateLightOurPath(url));
    };
  }

  return layer;
}));

const svg = new SVG(layers, render);

const update = (name: string, property: 'url' | 'displayed', value: string | boolean) => {
  layers.update(name, property, value);
  svg.update();
};

const toolPanel = new ToolPanel(document.body, elements, update);

const saveButton = button({ onclick: () => svg.save(), className: 'button' }, ['Download']);
document.body.append(saveButton);
