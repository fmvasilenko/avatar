import { button, div, img } from './Elementarno';
import Layers, { ILayer } from './Layers/Layers';
import SVG from './SVG';
import elements from './elements';
import ToolPanel from './ToolPanel/ToolPanel';
import updateEar from './utils/updateEar';
import updateText from './utils/updateText';
import updateLightOurPath from './utils/updateLightningOurPath';

// TEMPORARY! REMOVE BEFORE RELEASE!
const blockContainer = div({ id: 'block-container', className: 'blockContainer' });
document.body.append(blockContainer);
// TEMPORARY! REMOVE BEFORE RELEASE!

const avatarContainer = div({ className: 'Avatar' });
blockContainer.append(avatarContainer);

const imageContainer = div({ className: 'Avatar__imageContainer' });
avatarContainer.append(imageContainer);

const image = div({ id: 'image-container', className: 'Avatar__image' });
imageContainer.append(image);

const render = (urls: string[]) => {
  image.innerHTML = '';

  urls.forEach((url) => {
    image.append(img({ src: url, className: 'Avatar__layer' }));
  });
};

const layers = new Layers((updatedLayers) => {
  render(Object.entries(updatedLayers)
    .filter((layer) => layer[1].displayed)
    .map(([name]) => updatedLayers[name].url));
});

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
};

const toolPanelConatiner = div({ className: 'Avatar__toolPanelContainer' });
avatarContainer.append(toolPanelConatiner);

const toolPanel = new ToolPanel(toolPanelConatiner, elements, update);

const saveButton = button({ onclick: () => svg.save(), className: 'button' }, ['Download']);
toolPanelConatiner.append(saveButton);
