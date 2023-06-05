import { todoItem, Todo } from "./modules/models/item";
import { todoList } from "./modules/models/list";
import { listView } from "./modules/views/listView";
import { Collection } from "./modules/models/collection";
import { collectionView } from "./modules/views/collectionView";

import { taskView } from "./modules/views/taskView";
import { taskViewControl } from "./modules/controls/taskViewControl";

import uniqid from 'uniqid';


function unitIntervalMap(a: number, b: number, x: number): number {
  return (b - a)*x + a;
 }


function getRandomDate(timeSpan: number): Date{
  const minDate = Date.now();
  const timeStamp = Math.floor(unitIntervalMap(minDate, minDate + timeSpan, Math.random()));
  return new Date(timeStamp);
}


const todo1 = new todoList("Test List");
const todo2 = new todoList("2 Test 2 List");
const todo3 = new todoList("Test List Oriental Twist");

type discretePriority = "High" | "Medium" | "Low" | "None";
const priorityChoices = ['Low', 'Medium', 'High', 'None'] as Array<discretePriority>;

const hundredYearsLater = 3600*24*365*100*1000;

const oneWeekLater = 3600*24*7*1000;
const twoWeeksLater = 3600*24*14*1000;

const itemAmount = 3;
for (let i = 0; i < itemAmount; i++) {
  const params : Todo =  {
    completed: false,
    title: `Test Todo Item ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[i % 4],
    notes: `i found a baby bird and regurgitated my left over halal but spat it into the trash and jerked off into the birds willing and able buck toothed sexy beak of his and made him down that shit like a worm on sunday morning. the bird died but thats okay whats the difference between winnie the pooh and a teenage girl? nothing they all have severe eating disordersif you don't eat sandwich crust you need to grow the fuck up tbh`,
  };
  const newItem = new todoItem(params);
  todo1.add(newItem);
}

const itemAmount2 = 15;
for (let i = 0; i < itemAmount2; i++) {
  const params : Todo =  {
    completed: false,
    title: `2 Test 2 Todo Item ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[(i+3) % 4],
    notes: `i used to sit by a river and scream at the old puerto rican couple across so i could fight them. i had a sword, but they had a beards so i was no match for this black magic literally sometimes i curl up on the floor and pretend to be a pube omg i wish i was made out of bread because i could eat myself and die and end up in another dimension where everybody has dicks for legs and they have to be erect in oder for them to walk, otherwise they kinda flop around like fish. i could eventually bring a friend back from said dimention and put him though public school education and everyone would call him "danny dick-legs" lol`,
  };
  const newItem = new todoItem(params);
  todo2.add(newItem);
}

const itemAmount3 = 9;
for (let i = 0; i < itemAmount3; i++) {
  const params : Todo =  {
    completed: false,
    title: `Test Todo Item Oriental Twist ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[(i+3) % 4],
    notes: `僕はセックス大好き
    いつもセックス、毎日やりたいセックス
    チンコをマンコに入れたいな
    あー、気持ちいいな、入れたい`,
  };
  const newItem = new todoItem(params);
  todo3.add(newItem);
}

// for sideBar Nav

const listsCollectionWrapper = document.querySelector('.lists-collection-wrapper');

const listsCollection = new Collection();
listsCollection.add(todo1);
listsCollection.add(todo2);
listsCollection.add(todo3);

taskViewControl.initializeCollection(listsCollection);

let collectionViewObj = new collectionView(listsCollection);
const newCollectionView = collectionViewObj.genHtml()
listsCollectionWrapper.appendChild(newCollectionView);
collectionViewObj = null;

//let newListView = new listView(todo1);

// const objCache = [];


// const content = document.querySelector('.content');
// objCache.push(new taskView(listsCollection));
// const allTasksView = objCache[objCache.length - 1].genAllTasksView();

// //const listviewHtml = newListView.genHtml();
// content.appendChild(allTasksView);

taskViewControl.viewAllTasks();



