import { todoItem } from "../models/item";
import { itemDetail } from "../views/itemDetail";

class itemPreviewControl {

  static checkboxClick (e: Event): void {
    e.stopPropagation(); //update later to track checkbox
  } 



  static focusItem (e: Event): void {
    const { target } = e;
    if (target instanceof HTMLElement) {
        let finalTarget = target;
        if (!finalTarget.classList.contains('itemPreview')) {
          while (!finalTarget.classList.contains('itemPreview')) {
            finalTarget = finalTarget.parentElement;
          }}
        
        const classList = Array.from(finalTarget.classList);
        if (classList.includes('selected')){
          finalTarget.classList.remove('selected');
        } else {
          finalTarget.classList.add('selected');
        }
    }
  }

  static openDropdown (e: Event): void {
    const modalContainer = document.querySelector('.dropdown-modal-container') as HTMLDivElement;
    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const delItem = document.querySelector('.del-item') as HTMLDivElement;

    const target = e.target as HTMLElement;
    let finalTarget = target;
    while(!finalTarget.classList.contains('itemPreview')){
      finalTarget = finalTarget.parentElement;
    }

    const itemId = finalTarget.dataset['key'];
    viewItem.setAttribute('id', itemId);
    delItem.setAttribute('id', itemId);

    const rect = target.getBoundingClientRect();
    modalContainer.style.position = 'absolute';
    modalContainer.style.top = `${rect.bottom}px`;
    modalContainer.style.left = `${rect.left}px`;
    modalContainer.classList.add('show');
  }

  static openDetail(e: Event, items: Array<todoItem>) {
    const content = document.querySelector('.content');
    if (content.children.length > 1) {
      content.children[1].remove();
    }


    const viewItem = e.target as HTMLElement;

    const item = items.find((todo) => todo.itemId === viewItem.id);
    const detailViewObj = new itemDetail(item);
    const detailView = detailViewObj.genHtml();
    content.appendChild(detailView);

    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');

  }

  static delItem(e: Event, items: Array<todoItem>) {
    const delItem = e.target as HTMLElement;
    const content = document.querySelector('.content');
    
    if (content.children.length > 1) {
      const currentDetail = content.children[1] as HTMLElement;
      if (currentDetail.dataset['key'] === delItem.id){
        currentDetail.remove();
      }  
    }
    const item = items.find((todo) => todo.itemId === delItem.id);
    const idx = items.indexOf(item);
    items.splice(idx, 1);
    console.log(items);
    const target = document.querySelector(`[data-key='${delItem.id}'].itemPreview`);
    target.remove();

    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');
  }


  static stop(e: Event) : void {
    e.stopPropagation();
  }

}

export { itemPreviewControl }