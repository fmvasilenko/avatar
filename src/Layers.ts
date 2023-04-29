interface IPosition {
  x: number;
  y: number;
}

interface ILayer {
  name: string;
  url: string;
  // position: IPosition;
}

interface ICreatorLayer extends ILayer {
  order: number;
}

interface ILayers {
  [key: string]: ICreatorLayer;
}

interface IRender {
  (urls: string[]): void;
}

class Layers {
  private layers: ILayers = {};

  private order: string[] = [];

  constructor(layers?: ILayer[]) {
    if (layers) this.setLayers(layers);
  }

  public setLayers(layers: ILayer[]) {
    layers.forEach((layer) => {
      this.setLayer(layer.name, layer);
    });
  }

  public setLayer(name: string, layer: ILayer) {
    if (this.layers[name]) {
      this.layers[name] = {
        ...layer,
        order: this.layers[name].order,
      };
    } else {
      this.order.push(name);
      this.layers[name] = {
        ...layer,
        order: this.order.length - 1,
      };
    }
  }

  public removeLayer(name: string) {
    if (!this.layers[name]) return;

    this.order = this.order.splice(this.layers[name].order, 1);
    delete this.layers[name];
  }

  public getLayersList() {
    return this.order.map((name) => this.layers[name].url);
  }
}

export default Layers;

/*
  API

  layers.set({ name: 'myName', url: 'url' });

  layers.set([
    { name: 'myName', url: 'url' },
    { name: 'myName1', url: 'url1' }
  ]);

  layers.remove(name: 'myName');

  layers.remove([
    'myName',
    'myName2'
  ]);

  layers.get(); // returns full list ILayer

  layers.get('myName'); // returns ILayer

  layers.getUrls(); // returns list of urls

  layers.updateUrl('myName', 'url');

  layers.updatePosition(20, 30);

  layers.updatePositionX(20);

  layers.updatePositionY(30);
*/
