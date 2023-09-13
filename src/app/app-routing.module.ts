import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { GauHomeComponent } from './gau-home/gau-home.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: UserSignupComponent,
  },
  {
    path: 'sign-in',
    component: UserAuthComponent,
  },
  {
    path: '',
    component: GauHomeComponent,
  },
  {
    path: 'home',
    component: GauHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
