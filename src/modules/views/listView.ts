import { todoList } from "../models/list";
import { itemPreview } from "./itemPreview";
import { itemPreviewControl } from "../controls/itemControl";
import { listControl } from "../controls/listControl";
import "./styles/listView.css";
import { itemDetail } from "./itemDetail";
import { itemDetailControl } from "../controls/itemDetailControl";

class listView {
  private itemViewList: Array<itemPreview>;
  private itemDetailList: Array<itemDetail>;

  constructor(private target: todoList) {
    this.target = target;
      
    this.itemViewList = this.target.items.map(
      (item) => new itemPreview(item));
  }

  genHtml() {
    const list = document.createElement('div');
    list.className = 'todoList';

    for (let itemView of this.itemViewList) {
      const preview = itemView.genHtml();
      preview.addEventListener('mousedown', listControl.mouseDown);
      list.appendChild(preview);
    }

    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    viewItem.addEventListener('click', (e) => {
      itemPreviewControl.openDetail(e, this.target.items);
    });

    const delItem = document.querySelector('.del-item') as HTMLDivElement;
    delItem.addEventListener('click', (e) => {
      itemPreviewControl.delItem(e, this.target.items)
    });

    const icons = Array.from(list.querySelectorAll('path'));
    const svgs = Array.from(list.querySelectorAll('svg'));

    svgs.forEach((svg) => {
      svg.addEventListener('click', itemPreviewControl.stop);
      svg.addEventListener('click', itemPreviewControl.openDropdown);
    });
    icons.forEach((icon) => {
      icon.addEventListener('click', itemPreviewControl.stop);
      icon.addEventListener('click', itemPreviewControl.openDropdown);
    });

    return list;
  }
}

export { listView }