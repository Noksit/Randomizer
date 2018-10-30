import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {RandomizerComponent} from './randomizer/randomizer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'randomizer', component: RandomizerComponent},
  {path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
