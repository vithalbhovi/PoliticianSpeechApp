import { RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';
import { AppComponent }  from './app.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { ViewSpeechComponent } from './viewSpeeches/viewSpeeches.component';
import { NewSpeechComponent } from './newSpeech/newSpeech.component';
import { SearchComponent } from './search/search.component';
import {HttpModule} from '@angular/http';
import{ SpeechServices } from './services/speech.services';

@NgModule({
  imports:      [ 
    BrowserModule, 
    Ng2DatetimePickerModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot (rootRouterConfig, {useHash:true}) 
    ],

  declarations: [ 
    AppComponent,
    ViewSpeechComponent,
    NewSpeechComponent,
    SearchComponent],
  providers:[ SpeechServices ],

  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
