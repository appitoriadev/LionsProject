import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterOutlet],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.css'
})
export class HomelayoutComponent {

}
