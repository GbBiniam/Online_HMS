import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {path:'', component:PropertyListComponent},
  {path:'rent-prop', component:PropertyListComponent},
  {path:'add-prop', component:AddPropertyComponent},
  {path:'detail-prop/:id',
          component:PropertyDetailComponent,
          resolve:{prp:PropertyDetailResolverService}},
  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
