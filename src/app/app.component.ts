import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interface-studia';
  @ViewChild('contentElement') contentElementRef!: ElementRef;

  private elements: HTMLElement[] = [];

  ngAfterViewInit() {
    this.elements = this.contentElementRef.nativeElement.querySelectorAll('.text');
  }

  small() {
    this.changeFontSize(1);
  }

  big() {
    this.changeFontSize(-1);
  }

  private changeFontSize(delta: number) {
    for (const element of this.elements) {
      const fontSize = parseInt(getComputedStyle(element).fontSize, 10);
      element.style.fontSize = `${fontSize + delta}px`;
    }
  }
}
