import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import{faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import{faContactBook} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  faCoffee = faCoffee;
  faPenToSquare=faPenToSquare;
  faContactBook=faContactBook
  @Input() property :any;

  constructor() { }

  ngOnInit() {
  }

}
