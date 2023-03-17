type discretePriority = "High" | "Medium" | "Low";

interface Todo {
  completed: boolean, 
  title: string, 
  description: string, 
  dueDate: Date, 
  localPriority: number, 
  globalPriority?: discretePriority
}

class todoItem{
  
  constructor(private props: Todo) {
    this.props = props;
  }

  // getters
  get completed () : boolean { return this.props.completed }
  get title () : string { return this.props.title }
  get description () : string { return this.props.description }
  get dueDate () : Date { return this.props.dueDate }
  get localPriority () : number { return this.props.localPriority }
  get globalPriority () : discretePriority { return this.props.globalPriority }

  // setters
  set completed (newValue: boolean) { this.props.completed  = newValue;}
  set title (newValue: string) { this.props.title = newValue; }
  set description (newValue: string) { this.props.description = newValue; }
  set dueDate (newValue: Date) { this.props.dueDate = newValue; }
  set localPriority (newValue: number) { this.props.localPriority = newValue; }
  set globalPriority (newValue: discretePriority){ this.props.globalPriority = newValue; }

}


export { todoItem, Todo }