import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = TASKS;
  constructor() { }
  getTaskList():Task[]{
    return this.tasks;
  }
}

