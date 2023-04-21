import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
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
