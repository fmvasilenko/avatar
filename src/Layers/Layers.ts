import LayerNotFoundError from '../errors/LayerNotFoundError';
import TypeError from '../errors/TypeError';

interface ILayer {
  name: string;
  url: string;
  positionX?: number;
  positionY?: number;
  displayed?: boolean;
  onUrlUpdated?: (url: string) => void;
}

interface ILayerInternal extends ILayer {
  positionX: number;
  positionY: number;
  order: number;
  displayed: boolean;
}

interface ILayersInternal {
  [key: string]: ILayerInternal;
}

type OnUpdateCallback = (layers: ILayersInternal) => void;

class Layers {
  private layers: ILayersInternal = {};

  private order: string[] = [];

  private onUpdate?: OnUpdateCallback;

  constructor(onUpdate?: OnUpdateCallback) {
    this.onUpdate = onUpdate;

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
    this.updateDisplayed = this.updateDisplayed.bind(this);
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
    return Object.entries(this.layers)
      .filter((layer) => layer[1].displayed)
      .map(([name]) => this.layers[name].url);
  }

  public update(name: string, property: 'url' | 'positionX' | 'positionY' | 'displayed', value: string | number | boolean) {
    if (!this.layers[name]) throw new LayerNotFoundError(name);

    const update = {
      url: this.updateUrl,
      positionX: this.updatePositionX,
      positionY: this.updatePositionY,
      displayed: this.updateDisplayed,
    };

    update[property](name, value);

    if (property === 'url') this.layers[name].onUrlUpdated?.(String(value));

    if (this.onUpdate) this.onUpdate(this.layers);
  }

  private setLayers(layers: ILayer[]) {
    layers.forEach((layer) => this.setLayer(layer));
  }

  private setLayer(layer: ILayer) {
    const {
      name,
      positionX,
      positionY,
      displayed,
    } = layer;

    if (this.layers[name]) {
      this.layers[name] = {
        ...layer,
        positionX: positionX || this.layers[name].positionX,
        positionY: positionY || this.layers[name].positionY,
        order: this.layers[name].order,
        displayed: displayed === undefined ? true : displayed,
      };
    } else {
      this.order.push(name);
      this.layers[name] = {
        ...layer,
        positionX: positionX || 0,
        positionY: positionY || 0,
        order: this.order.length - 1,
        displayed: displayed === undefined ? true : displayed,
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

  private updateUrl(name: string, url: number | string | boolean) {
    if (typeof url !== 'string') {
      throw new TypeError(`Url for '${name}' is supposed to have string type. Now the type is '${typeof url}'`);
    }

    this.layers[name].url = url;
  }

  private updatePositionX(name: string, value: number | string | boolean) {
    if (typeof value !== 'number') {
      throw new TypeError(`PositionX for '${name}' is supposed to have number type. Now the type is '${typeof value}'`);
    }

    this.layers[name].positionX = value;
  }

  private updatePositionY(name: string, value: number | string | boolean) {
    if (typeof value !== 'number') {
      throw new TypeError(`PositionY for '${name}' is supposed to have number type. Now the type is '${typeof value}'`);
    }

    this.layers[name].positionY = value;
  }

  private updateDisplayed(name: string, value: number | string | boolean) {
    if (typeof value !== 'boolean') {
      throw new TypeError(`Displayed for '${name}' is supposed to have boolean type. Now the type is '${typeof value}'`);
    }

    this.layers[name].displayed = value;
  }
}

export default Layers;
export type { ILayer };
