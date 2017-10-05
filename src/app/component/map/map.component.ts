import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //original position
  lat: number = 41.51817934485921;
  lng: number = 0.870193200000017;
    
  /*markers
  markers: marker[] = [
    {
      name:'BorgesCan',
      lati:41.51046061405486,
      longi:0.8662385000000086,
      draggable:true,
    },
    {
      name:'Daviscan',
      lati:41.51917811405919,
      longi:0.8911035999999513,
      draggable:true,
    },
    {
      name:'Protectora Animals Lydia Argiles',
      lati:41.611141914104714,
      longi:0.5720532000000276,
      draggable:true,
    }
  ];*/
  constructor() {}
  
   
  
  ngOnInit() {
    
  }
 
  
}
