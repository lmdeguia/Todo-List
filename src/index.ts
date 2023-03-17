import { todoItem, Todo } from "./modules/todoItem";


const params : Todo =  {
  completed: false,
  title: 'Test Todo Item',
  description: 'N/A',
  dueDate: new Date(),
  localPriority: 0
};

const newItem = new todoItem(params);
const completedStatus = (newItem.completed) ? 'Completed' : 'Not Completed';

const body = document.querySelector('body');

newItem.description = "Actually, I decided to add a description: balls";

body.innerHTML = `
  <h3 style="text-decoration: underline;">
    ${newItem.title}
  </h3>
  <ul style="list-style-type:none;">
    <li>id: ${newItem.localPriority}</li>
    <li>Due Date: ${newItem.dueDate.toLocaleDateString()}</li>
    <li>Status: ${completedStatus}</li>
    <li> Description: ${newItem.description}</li>
  </ul>
`;


