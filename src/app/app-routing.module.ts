import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

//for giving a path we have to create an object
const routes: Routes = [
  // if path is empty than redirect to myportfolio and match the full path
  {
    path:"",redirectTo:"myportfolio" ,pathMatch:"full"

  },
  {
    path : "search", component:SearchComponent
  },
  {
    path:"all-users",component:AllUsersComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"myportfolio",component:MyportfolioComponent
  },
  //invalid routing case
  {
    path:"**",component:MyportfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
