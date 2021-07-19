import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		ReactiveFormsModule,
    AppRoutingModule,    
    // AddContactComponent
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class AppModule { }
