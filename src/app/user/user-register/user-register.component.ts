import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmited : boolean;
  constructor(private fb: FormBuilder, private alertify: AlertifyService,
    private userService: UserService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email] ),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   confirmPassword:new FormControl(null, Validators.required),
    //   mobile:new FormControl(null, Validators.required)
    // },this.passwordMatchValidator);
    this.createRegisterationForm();
  }
  createRegisterationForm() {
    this.registrationForm =  this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchValidator});
}

  passwordMatchValidator(fg:FormGroup):Validators{
    return fg.get('password').value ===fg.get('confirmPassword').value?null :
    {notmatched:true}
  }
//getter methods for all fields
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  userData():User{
    return this.user ={
      userName : this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmited = true
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmited = false;
      this.alertify.success('Data saved successfully !');
    }
    else{
      this.alertify.error('Data not saved !');
    }
  }

}
