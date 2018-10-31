import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent, HomeDialogComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {PlayDialogComponent, UserComponent} from './user/user.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RandomizerComponent} from './randomizer/randomizer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {UserDetailComponent} from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    FooterComponent,
    RandomizerComponent,
    HomeDialogComponent,
    PlayDialogComponent,
    UserDetailComponent,
  ],
  entryComponents: [
    HomeDialogComponent,
    HomeComponent,
    UserComponent,
    PlayDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
