import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name  = 'Esther';
  text = '';
  date = [];
  setPosition: any;


  constructor() { }

  setName() {
    this.name = 'Stephen';
  }

  setText() {
    this.text ='new user added';
  }

  getDetails() {
    this.date.push(new Date())
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
  }

  ngOnInit() {
      }
}
