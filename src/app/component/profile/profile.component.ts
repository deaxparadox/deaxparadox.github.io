import { afterNextRender, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor() {
    afterNextRender(() => {
      this.leftPanelFunction();
    })
  }

  ngOnInit(): void {
      // this.leftPanelFunction();
  }

  leftPanelFunction = () => {
    let state = false

    const leftButton = document.querySelector(".ewl-left-panel-button") as HTMLButtonElement;
    const leftPanel = document.querySelector(".ewl-left-panel-left") as HTMLDivElement;
    leftButton.addEventListener('click', () => {

      state = !state;
      console.log("Left button clicked", state);

      if (state) {
        leftPanel.style.width = '100px';
      } else {
        leftPanel.style.width = '0px';

      }



    })
  }

}
