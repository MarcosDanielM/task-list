export interface Task {
  id?: number; //Una nueva tarea genera un nuevo ID.
  text: string;
  day: string;
  reminder: boolean;
}
