import { todoItem, Todo } from "./modules/models/item";
import { itemPreview } from "./modules/views/itemPreview";
import { todoList } from "./modules/models/list";
import { listView } from "./modules/views/listView";
import { itemPreviewControl } from "./modules/controls/itemControl";
import { itemDetail } from "./modules/views/itemDetail";
import * as uniqid from "uniqid";


const testDateString = '2023-04-20' as const;
const rawTestDateParams = testDateString.split('-');

const [testYear, testMonth, testDay] = rawTestDateParams.map((item) => {
  let idx = rawTestDateParams.indexOf(item);
  return (idx === 1) ? (+item) - 1 : +item;
}) as [number, number, number];



const todo1 = new todoList();

const itemAmount = 15;
for (let i = 0; i < itemAmount; i++) {
  const params : Todo =  {
    completed: false,
    title: `Test Todo Item ${i+1}`,
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: `${uniqid()}`,
    priority: 'High',
  };
  const newItem = new todoItem(params);
  todo1.add(newItem);
}



const newListView = new listView(todo1);

const content = document.querySelector('.content');



const listviewHtml = newListView.genHtml();
content.appendChild(listviewHtml);

