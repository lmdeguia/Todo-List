import { itemDetailControl } from "../controls/itemDetailControl";
import { todoItem } from "../models/item";
import './styles/itemDetail.css';

class itemDetail {

  constructor(private target: todoItem) {
    this.target = target;
  }

  genHtml (): HTMLDivElement {
    const itemDetail = document.createElement('div');
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener('click', itemDetailControl.closeDetail);
    itemDetail.appendChild(closeBtn);
    itemDetail.className = 'itemDetail';

    const itemTitleContainer = document.createElement('div');
    const itemTitle = document.createElement('h2');
    itemTitle.textContent = this.target.title;
    itemTitleContainer.appendChild(itemTitle);

    const itemId = document.createElement('div');
    itemId.textContent = this.target.itemId;

    itemTitleContainer.className = 'itemTitleContainer';

    




    itemDetail.setAttribute('data-key', `${this.target.itemId}`);
    itemDetail.appendChild(itemTitleContainer);
    itemDetail.appendChild(itemId);
    return itemDetail;
  }
}

export { itemDetail }