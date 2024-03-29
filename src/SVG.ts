import Layers from './Layers/Layers';
import { a } from './Elementarno';

interface IRender {
  (urls: string[]): void;
}

class SVG {
  private render: IRender;

  private layers: Layers;

  constructor(layers: Layers, render: IRender) {
    this.layers = layers;
    this.render = render;
    this.render(this.layers.getUrlsList());
  }

  public async save() {
    const fetchedEl = await Promise.all(this.layers.getUrlsList().map((el) => SVG.getElement(el)));

    const openingTag = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 450 378">';
    const content = fetchedEl.join('');
    const closingTag = '</svg>';

    const blob = new Blob([openingTag + content + closingTag], { type: 'image/svg+xml' });

    const downloadLink = a({ href: URL.createObjectURL(blob), download: 'avatar.svg' }, ['download']);
    document.body.append(downloadLink);

    downloadLink.click();
    downloadLink.remove();
  }

  static getElement(url: string) {
    return fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, 'image/svg+xml');

        return svgDoc.querySelector('svg')?.innerHTML;
      });
  }
}

export default SVG;
