import { todoItem } from "../models/item";
import { itemDetail } from "../views/itemDetail";

class itemDetailControl{
  static closeDetail(e: Event) {
    const target = e.target as HTMLElement;
    target.parentElement.remove();
  }


}

export{ itemDetailControl }