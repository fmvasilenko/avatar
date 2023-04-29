class TypeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TypeError';
  }
}

export default TypeError;
