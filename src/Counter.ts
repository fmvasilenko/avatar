class Counter {
  private value = 0;

  private limit: number;

  constructor(limit: number) {
    this.limit = limit;

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    if (this.value === 0) this.value = this.limit;
    else this.value -= 1;
  }

  next() {
    if (this.value === this.limit) this.value = 0;
    else this.value += 1;
  }

  get() {
    return this.value;
  }
}

export default Counter;
