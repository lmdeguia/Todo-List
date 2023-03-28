import { todoItem } from "./item";

class todoList {

  private _items: Array<todoItem>;

  constructor() {
    this._items = [];
  }
  
  get items (): Array<todoItem> { return this._items; }

  add (newItem: todoItem): void {
    this._items.push(newItem);
  }

  remove (item: todoItem): void {
    const idx = this._items.indexOf(item);
    console.log(`list item ${idx} removed`);
    this._items.splice(idx, 1);
  }

  clearList (): void {
    this._items = [];
  }
}

export { todoList }