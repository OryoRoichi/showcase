import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowcaseComponent } from "./showcase/showcase.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShowcaseComponent,
    TuiRoot,

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
