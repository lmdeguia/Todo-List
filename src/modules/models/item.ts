type discretePriority = "High" | "Medium" | "Low";

interface Todo {
  completed: boolean, 
  title: string, 
  itemId: string,
  createdDate: Date, 
  dueDate?: Date,
  priority?: discretePriority
  notes?: string,
  // add subtasks later
}

class todoItem{

  constructor(private props: Todo) {
    this.props = props;
  }

  // getters
  get completed () : boolean { return this.props.completed; }
  get title () : string { return this.props.title; }
  get createdDate () : Date { return this.props.createdDate; }
  get dueDate () : Date { return this.props.dueDate; }
  get itemId () : string { return this.props.itemId; }
  get priority () : discretePriority { return this.props.priority; }
  get notes () : string { return this.props.notes; }
  
  // setters
  set completed (newValue: boolean) { this.props.completed  = newValue;}
  set title (newValue: string) { this.props.title = newValue; }
  set dueDate (newValue: Date) { this.props.dueDate = newValue; }
  set itemId (newValue: string) { this.props.itemId = newValue; }
  set priority (newValue: discretePriority){ this.props.priority = newValue; }
  set notes (newValue: string)  { this.props.notes = newValue; }

}


export { todoItem, Todo }