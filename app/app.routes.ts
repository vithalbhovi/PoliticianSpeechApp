import {Routes} from '@angular/router';
import { ViewSpeechComponent } from './viewSpeeches/viewSpeeches.component';
import { NewSpeechComponent } from './newSpeech/newSpeech.component';
import { SearchComponent } from './search/search.component';

export const rootRouterConfig: Routes = [
    {path:'', redirectTo:'viewSpeeches', pathMatch:'full'},
    {path:'newSpeech', component:NewSpeechComponent},
    {path:'viewSpeeches', component:ViewSpeechComponent},
    {path:'search', component:SearchComponent},

];