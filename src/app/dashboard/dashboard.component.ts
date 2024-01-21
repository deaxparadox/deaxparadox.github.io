import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  color1: string = "rgb(0, 98, 190)";

  languages =  [
    "Python",
    "Javascript",
    "TypeScript",
    "Rust",
    "C",
    "SQL",
    "HTML",
    "CSS",
    "SCSS"
  ]
  databases = [
    "SQLite",
    "PostgreSQL"
  ] 
  frameworks =  [
    "Django",
    "Selenium",
    "AngularJS",
    "Pytest"
  ]
  additionalSkills =  [
    "Docker",
    "Git",
    "Linux",
    "RestAPIs"
  ]

}
