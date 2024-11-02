import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.css'
})
export class AuthLayoutComponent {

}
