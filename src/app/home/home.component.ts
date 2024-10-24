import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  elementRef: ElementRef | null = null

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef
  }


  @ViewChild("skills") skillsRef: ElementRef | undefined;
  goSkills = () => {
    const query: string = this.skillsRef?.nativeElement.innerText;
    const div = this.elementRef?.nativeElement.querySelector(`#${query.toLowerCase()}`)  as HTMLDivElement;
    
    window.scrollTo({
      top: div.getClientRects()[0].y,
      left: div.getClientRects()[0].x,
      behavior: "smooth"
    })
    // this.elementRef?.nativeElement.querySelector(eve)
  }

}
