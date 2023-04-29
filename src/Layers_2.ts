import LayerNotFoundError from './errors/LayerNotFoundError';
import TypeError from './errors/TypeError';

interface ILayer {
  name: string;
  url: string;
  positionX?: number;
  positionY?: number;
  onUrlUpdated?: (url: string) => void;
}

interface ILayerInternal extends ILayer {
  positionX: number;
  positionY: number;
  order: number;
}

interface ILayersInternal {
  [key: string]: ILayerInternal;
}

// TODO: add moveLayerUp, moveLayerDown, bringToFront, sendToBottom

class Layers {
  private layers: ILayersInternal = {};

  private order: string[] = [];

  constructor() {
    this.set = this.set.bind(this);
    this.remove = this.remove.bind(this);
    this.get = this.get.bind(this);
    this.getUrlsList = this.getUrlsList.bind(this);
    this.update = this.update.bind(this);

    this.setLayers = this.setLayers.bind(this);
    this.setLayer = this.setLayer.bind(this);
    this.removeLayers = this.removeLayers.bind(this);
    this.removeLayer = this.removeLayer.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.updatePositionX = this.updatePositionX.bind(this);
    this.updatePositionY = this.updatePositionY.bind(this);
  }

  public set(payload: ILayer | ILayer[]) {
    if (Array.isArray(payload)) this.setLayers(payload);
    else this.setLayer(payload);
  }

  public remove(payload: string | string[]) {
    if (Array.isArray(payload)) this.removeLayers(payload);
    else this.removeLayer(payload);
  }

  public get(name?: string) {
    if (name) {
      if (!this.layers[name]) throw new LayerNotFoundError(name);
      return this.layers[name];
    }
    return this.layers;
  }

  public getUrlsList() {
    return Object.keys(this.layers).map((name) => this.layers[name].url);
  }

  public update(name: string, property: 'url' | 'positionX' | 'positionY', value: string | number) {
    if (!this.layers[name]) throw new LayerNotFoundError(name);

    const update = {
      url: this.updateUrl,
      positionX: this.updatePositionX,
      positionY: this.updatePositionY,
    };

    update[property](name, value);

    if (property === 'url') this.layers[name].onUrlUpdated?.(String(value));
  }

  private setLayers(layers: ILayer[]) {
    layers.forEach((layer) => this.setLayer(layer));
  }

  private setLayer(layer: ILayer) {
    const { name, positionX, positionY } = layer;

    if (this.layers[name]) {
      this.layers[name] = {
        ...layer,
        positionX: positionX || this.layers[name].positionX,
        positionY: positionY || this.layers[name].positionY,
        order: this.layers[name].order,
      };
    } else {
      this.order.push(name);
      this.layers[name] = {
        ...layer,
        positionX: positionX || 0,
        positionY: positionY || 0,
        order: this.order.length - 1,
      };
    }
  }

  private removeLayers(names: string[]) {
    names.forEach((name) => this.removeLayer(name));
  }

  private removeLayer(name: string) {
    if (!this.layers[name]) return;

    this.order = this.order.splice(this.layers[name].order, 1);
    delete this.layers[name];
  }

  private updateUrl(name: string, url: number | string) {
    if (typeof url !== 'string') {
      throw new TypeError(`Url for '${name}' is supposed to have string type. Now the type is '${typeof url}'`);
    }

    this.layers[name].url = url;
  }

  private updatePositionX(name: string, value: number | string) {
    if (typeof value !== 'number') {
      throw new TypeError(`PositionX for '${name}' is supposed to have number type. Now the type is '${typeof value}'`);
    }

    this.layers[name].positionX = value;
  }

  private updatePositionY(name: string, value: number | string) {
    if (typeof value !== 'number') {
      throw new TypeError(`PositionY for '${name}' is supposed to have number type. Now the type is '${typeof value}'`);
    }

    this.layers[name].positionY = value;
  }
}

export default Layers;
