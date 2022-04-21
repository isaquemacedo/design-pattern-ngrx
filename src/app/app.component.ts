import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-patterns';

  constructor(private http: HttpClient,
    private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {}
}
