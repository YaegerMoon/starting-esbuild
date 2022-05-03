import { Collection } from "../collection";

export class Stack<T> implements Collection<T> {
  private collection: T[];

  constructor(...init: T[]) {
    this.collection = init;
  }

  push(el: T) {
    return this.collection.push(el);
  }

  pop() {
    return this.collection.pop();
  }

  get size() {
    return this.collection.length;
  }

  toArray(): T[] {
    return this.collection;
  }
}
