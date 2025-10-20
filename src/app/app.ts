import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component1 } from "./components/component1/component1";
import { Component2 } from "./components/component2/component2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component1, Component2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('preacticaObservable');
}
