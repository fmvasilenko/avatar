class LayerNotFoundError extends Error {
  constructor(name: string) {
    super(`Layer '${name}' was not found`);
    this.name = 'LayerNotFound';
  }
}

export default LayerNotFoundError;
