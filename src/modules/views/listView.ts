import { todoList } from "../models/list";
import { itemPreview } from "./itemPreview";
import { itemPreviewControl } from "../controls/itemControl";
import { listControl } from "../controls/listControl";
import "./styles/listView.css";

class listView {
  private itemViewList: Array<itemPreview>;

  constructor(private target: todoList) {
    this.target = target;
    this.itemViewList = this.target.items.map(
      (item) => new itemPreview(item));
  }

  genHtml() {
    const list = document.createElement('div');
    list.className = 'todoList';

    for (let itemView of this.itemViewList) {
      const node = itemView.genHtml();
      node.addEventListener('mousedown', listControl.mouseDown);
      list.appendChild(node);
    }

    const deletePopups = Array.from(list.querySelectorAll('.delTask'));
    deletePopups.forEach((item) =>  {
      item.addEventListener('click', itemPreviewControl.stop);
    })

    const editPopups = Array.from(list.querySelectorAll('.editTask'));
    editPopups.forEach((item) =>  {
      item.addEventListener('click', itemPreviewControl.stop);
    })

    const icons = Array.from(list.querySelectorAll('path'));
    const svgs = Array.from(list.querySelectorAll('svg'));
    icons.forEach((item) => {
      item.addEventListener('click', itemPreviewControl.openOptions);
    })
    svgs.forEach((item) => {
      item.addEventListener('click', itemPreviewControl.openOptions);
    })

    return list;
  }
}

export { listView }