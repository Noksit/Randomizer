import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {RandomizerComponent} from './randomizer/randomizer.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'randomizer', component: RandomizerComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
