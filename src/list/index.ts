import { Collection } from "../collection";

class List<T> implements Collection<T> {
  private collection: T[];

  constructor(init: T[] = []) {
    this.collection = init;
  }

  append(...element: T[]): number {
    this.collection = this.collection.concat(element);
    return this.collection.length;
  }

  get first() {
    return this.collection[0];
  }

  get last() {
    return this.collection[this.collection.length - 1];
  }

  toArray(): T[] {
    return this.collection;
  }
}

export { List };
