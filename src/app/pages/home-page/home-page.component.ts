import { Component, OnInit } from '@angular/core';
declare var $ ;
declare var jQuery;


$(document).ready(function(){
$('.slider').slider({
  indicators:false
});
});


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
