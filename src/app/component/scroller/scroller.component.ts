import { Component, ElementRef, Input, input } from '@angular/core';

@Component({
  selector: 'app-scroller',
  standalone: true,
  imports: [],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.scss'
})
export class ScrollerComponent {
  @Input() elementRef: ElementRef | null = null
  
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  isRequired = () => {
    return !((this.y + window.innerHeight) === document.body.clientHeight)
  }

  step: number = 100
  y: number = 0;

  up = () => {
    if (this.y > 0) {
      console.log(this.y);
      this.y -= this.step;
      window.scrollTo({
        top: this.y,
        left: 0,
        behavior: "smooth"
      })
    }

    if (this.y < 0) {
      this.y = 0
    }
  }


  down = () => {
    if ((this.y + window.innerHeight) <= window.document.body.clientHeight) {
      // console.log(this.y);
      this.y += this.step;
      window.scrollTo({
        top: this.y,
        left: 0,
        behavior: "smooth"
      })
    }
    console.log(this.y)
    
  }

}
