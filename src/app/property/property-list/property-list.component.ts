import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Property: any = [
    {
      Id: 1,
      Type: 'House',
      Price: 4055520,
      Name: 'Vila House',
    },
    {
      Id: 2,
      Type: 'Appartama',
      Price: 12055520,
      Name: '3 Bed House',
    },
    {
      Id: 3,
      Type: 'Condominium',
      Price: 355520,
      Name: '3 Bed House',
    },
    {
      Id: 4,
      Type: 'Stair',
      Price: 12055520,
      Name: 'Stair House',
    },
    {
      Id: 1,
      Type: 'Ground',
      Price: 255520,
      Name: 'Ground House',
    },
    {
      Id: 1,
      Type: 'Paint',
      Price: 1955520,
      Name: 'Paint House',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
