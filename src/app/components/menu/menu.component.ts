import { Component } from '@angular/core';
import { NAVI } from 'src/app/const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  NAVI = NAVI;
}
