import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomelayoutComponent } from './homelayout/homelayout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomelayoutComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LionsProject';
  btnLogin = true;
}
