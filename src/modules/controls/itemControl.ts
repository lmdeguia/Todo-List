class itemPreviewControl {

  static checkboxClick (e: Event): void {
    e.stopPropagation();
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

  static openOptions (e: Event): void {

    const { target } = e;
    const t = target as HTMLElement;
    let finalTarget;

    if(t.localName === 'path') {
      finalTarget = t.parentElement.previousElementSibling as HTMLElement;
    } else if (t.localName === 'svg') {
      finalTarget = t.previousElementSibling as HTMLElement;
    }

    finalTarget.classList.toggle("show");
    
    e.stopPropagation();
  }

  static stop(e: Event) : void {
    e.stopPropagation();
  }

}

export { itemPreviewControl }