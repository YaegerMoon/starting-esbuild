import { Collection } from "../collection";

export class Queue<T> implements Collection<T> {
  private collection: T[];
  constructor(...init: T[]) {
    this.collection = init;
  }

  enqueue(el: T) {
    return this.collection.push(el);
  }

  dequeue() {
    return this.collection.shift();
  }

  get size() {
    return this.collection.length;
  }

  toArray(): T[] {
    return this.collection;
  }
}
