import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm:NgForm | undefined;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(Form :NgForm){
    console.log('Form submited');
    console.log(this.addPropertyForm);
  }

}
