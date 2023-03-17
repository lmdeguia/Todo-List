type discretePriority = "High" | "Medium" | "Low";
interface Todo {
    completed: boolean;
    title: string;
    description: string;
    dueDate: Date;
    localPriority: number;
    globalPriority?: discretePriority;
}
declare class todoItem {
    private props;
    constructor(props: Todo);
    get completed(): boolean;
    get title(): string;
    get description(): string;
    get dueDate(): Date;
    get localPriority(): number;
    get globalPriority(): discretePriority;
    set completed(newValue: boolean);
    set title(newValue: string);
    set description(newValue: string);
    set dueDate(newValue: Date);
    set localPriority(newValue: number);
    set globalPriority(newValue: discretePriority);
}
export { todoItem, Todo };
