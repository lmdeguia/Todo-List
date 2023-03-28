class listControl{
  
  static targetItem: HTMLElement = null;
  static varX: number = 0; 
  static varY: number = 0; 
  static dragging: boolean = false;
  static placeholder: HTMLDivElement = null;
  static itemRect: DOMRect = null;
  static prev: HTMLElement = null;
  static next: HTMLElement = null;

  static isAbove(nodeA: HTMLElement, nodeB: HTMLElement): boolean { // criteria for switching list items
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();
  
    return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
  }

  
  static mouseMove(e: MouseEvent): void {
    e.stopPropagation();
    listControl.itemRect = listControl.targetItem.getBoundingClientRect();
  
    if (!listControl.dragging) {
      listControl.dragging = true;
      listControl.placeholder = document.createElement('div');
      listControl.placeholder.classList.add('placeholder');
      listControl.targetItem.parentNode.insertBefore(
        listControl.placeholder, 
        listControl.targetItem.nextSibling);
      listControl.targetItem.style.width = `${listControl.itemRect.width}px`;
      listControl.placeholder.style.minHeight = `${listControl.itemRect.height}px`;
      listControl.placeholder.style.width = `${listControl.itemRect.width}px`;
    }
  
    listControl.targetItem.style.position = 'absolute';
    listControl.targetItem.style.left = `${e.pageX - listControl.varX}px`
    listControl.targetItem.style.top = `${e.pageY - listControl.varY}px`
  
    listControl.prev = listControl.targetItem.previousElementSibling as HTMLElement;
    listControl.next = listControl.targetItem.nextElementSibling.nextElementSibling as HTMLElement;
  
    if (listControl.prev && listControl.isAbove(listControl.targetItem, listControl.prev)) {
      listControl.placeholder.parentNode.insertBefore(listControl.prev, listControl.placeholder.nextElementSibling);
      return;
    }
  
    if (listControl.next && listControl.isAbove(listControl.next, listControl.targetItem)) {
      listControl.next.parentNode.insertBefore(listControl.placeholder, listControl.next.nextElementSibling);
      listControl.next.parentNode.insertBefore(listControl.targetItem, listControl.placeholder);
    }
    
    
  }
  
  
  static mouseUp(e: MouseEvent): void {
    e.stopPropagation();
    if (listControl.placeholder && listControl.placeholder.parentNode) {
      listControl.placeholder.parentNode.removeChild(listControl.placeholder);
    }
    // return item to list upon release of mouse button:
    listControl.targetItem.style.removeProperty('position');
    listControl.targetItem.style.removeProperty('top');
    listControl.targetItem.style.removeProperty('left');
  
    listControl.varX = null, listControl.varY = null, listControl.targetItem = null, listControl.dragging = false;
  
    document.removeEventListener('mousemove', listControl.mouseMove);
    document.removeEventListener('mouseup', listControl.mouseUp);
  }

  static mouseDown(e: MouseEvent): void {
    e.stopPropagation();
    listControl.targetItem = e.target as HTMLElement;
    while (listControl.targetItem.parentElement.className !== 'todoList') {
      listControl.targetItem = listControl.targetItem.parentElement;
    }
    const rect = listControl.targetItem.getBoundingClientRect();
    // space outside page x: mu = px - (L0 + u)
    // space outside page y: nu = py - (T0 + v)
    listControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
    listControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
  
    document.addEventListener('mousemove', listControl.mouseMove);
    document.addEventListener('mouseup', listControl.mouseUp);
    
  }
  
}



export { listControl }