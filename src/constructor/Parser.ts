import IElement from './types';

class Parser {
  private tag = '';

  private id = '';

  private classList: string[] = [];

  constructor() {
    this.reset();
  }

  public parse(payload: string): IElement {
    this.reset();
    this.getTag(payload);
    this.getId(payload);
    this.getClasses(payload);

    return {
      tag: this.tag,
      id: this.id,
      classList: this.classList,
    };
  }

  // TODO: fix #div#id problem
  // TODO: set div as a default if no tag provided
  // TODO: create a list of supported tags and check them here. Throw an error if not supported
  private getTag(payload: string) {
    const [tag] = payload.match(/\w+\W/) || [];

    if (!tag) throw new Error();

    this.tag = tag.replace(/\W/, '');
  }

  private getId(payload: string) {
    const [id] = payload.match(/#\w+/g) || [];

    this.id = id ? id.replace('#', '') : '';
  }

  private getClasses(payload: string) {
    const classes = payload.match(/\.\w+/g) || [];

    this.classList = classes.map((className) => className.replace('.', ''));
  }

  private reset() {
    this.tag = '';
    this.id = '';
    this.classList = [];
  }
}

export default Parser;
