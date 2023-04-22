import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interface-studia';
  isChat: boolean = false;

  chatVisibility(){
    this.isChat = !this.isChat;
  }

}
