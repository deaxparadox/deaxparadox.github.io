import { Component, ElementRef, OnInit, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

/* 
Importing components
*/
import { NavbarComponent } from './component/navbar/navbar.component';
import { ScrollerComponent } from './component/scroller/scroller.component';
import { ProfileComponent } from './component/profile/profile.component';
import { after } from 'node:test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    RouterLink, RouterLinkActive,
    NavbarComponent,
    ScrollerComponent,
    ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  elementRef: ElementRef | null = null;
  
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;

    afterRender(() => {
      console.log(document.body.clientHeight);
    })

  }

  ngOnInit(): void {
    
    // this.elementRef?.nativeElement.innerHeight;
  }
  


  title = 'deaxparadox';
}
