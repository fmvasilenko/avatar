interface IAvatar {
  (elements: Object, render: Function): void;
  setHair: (number: number) => void
}

interface IElements {
  hair: string[];
}

class Avatar {
  private hair: number = 0;

  private nose: number = 0;

  private mouth: number = 0;

  private eyes: number = 0;

  private face: number = 0;

  private elements: IElements;

  private render: Function;

  constructor(elements: IElements, render: Function) {
    this.elements = elements;
    this.render = render;
  }

  setHair(number: number): void {
    if (number < 0) number = 0;
    if (number > this.elements.hair.length) number = this.elements.hair.length;

    this.hair = number;
    this.render();
  }
}
