import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly httpClient = inject(HttpClient);
  todos$ = this.httpClient.get<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
  todos = toSignal(this.todos$);
}
