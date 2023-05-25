export interface ITodo {
  id: string;
  task: string;
  isCompleted: boolean; 
}

export interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string;
}
