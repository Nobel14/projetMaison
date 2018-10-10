import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// @Component({
//   selector: 'myform1',
//   templateUrl: './form1.html',
//   styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
// })

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase, 'projet-maison-angular'),
      AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppComponent {
  title = 'Projet de Maison Angular';
}
