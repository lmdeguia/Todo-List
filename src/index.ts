import { todoItem, Todo } from "./modules/models/item";
import { itemPreview } from "./modules/views/itemPreview";
import { todoList } from "./modules/models/list";
import { listView } from "./modules/views/listView";
import { itemPreviewControl } from "./modules/controls/itemControl";

const testDateString = '2023-04-20' as const;
const rawTestDateParams = testDateString.split('-');

const [testYear, testMonth, testDay] = rawTestDateParams.map((item) => {
  let idx = rawTestDateParams.indexOf(item);
  return (idx === 1) ? (+item) - 1 : +item;
}) as [number, number, number];


const params1 : Todo =  {
  completed: false,
  title: 'Test Todo Item 1',
  createdDate: new Date(),
  dueDate: new Date(testYear, testMonth, testDay),
  itemId: 0,
  priority: 'Low',
};


const params2 : Todo =  {
  completed: false,
  title: 'Test Todo Item 2',
  createdDate: new Date(),
  dueDate: new Date(testYear, testMonth, testDay),
  itemId: 0,
  priority: 'Medium',
};



const params3 : Todo =  {
  completed: false,
  title: 'Test Todo Item 3',
  createdDate: new Date(),
  dueDate: new Date(testYear, testMonth, testDay),
  itemId: 0,
  priority: 'High',
};

const params4 : Todo =  {
  completed: false,
  title: 'Test Todo Item 4',
  createdDate: new Date(),
  dueDate: new Date(testYear, testMonth, testDay),
  itemId: 0,
  priority: 'High',
};

const params5 : Todo =  {
  completed: false,
  title: 'Test Todo Item 5',
  createdDate: new Date(),
  dueDate: new Date(testYear, testMonth, testDay),
  itemId: 0,
  priority: 'High',
};

const newItem1 = new todoItem(params1);
const newItem2 = new todoItem(params2);
const newItem3 = new todoItem(params3);
const newItem4 = new todoItem(params4);
const newItem5 = new todoItem(params5);

const todo1 = new todoList();
todo1.add(newItem1);
todo1.add(newItem2);
todo1.add(newItem3);
todo1.add(newItem4);
todo1.add(newItem5);


const newListView = new listView(todo1);

const content = document.querySelector('.content');
const listviewHtml = newListView.genHtml();
content.appendChild(listviewHtml);
