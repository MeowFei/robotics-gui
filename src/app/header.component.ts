import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navBar: string[] = ["home", "sensors", "motor", "map", "camera"];
  time: string = '12:00'; //use INPUT module
  battery: string = '100%'; 

  constructor() { }

  ngOnInit() {
  }
}
