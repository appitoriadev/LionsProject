import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from "./main-component/main-component.component";
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponentComponent, FooterComponentComponent, HeaderComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LionsProject';
}
