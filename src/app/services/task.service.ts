import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //tasks: Task[] = TASKS;
  private apiUrl = "http://localhost:5000/tasks";
  constructor(private http: HttpClient) { }
  getTaskList():Observable<Task[]>{
     return this.http.get<Task[]>(this.apiUrl)
  }
}

