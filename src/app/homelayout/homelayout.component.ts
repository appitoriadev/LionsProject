import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.css'
})
export class HomelayoutComponent {

}
