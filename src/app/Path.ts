import { Route } from '@angular/router';
import { RecepieComponent } from './recepie/recepie.component';
import { ShefComponent } from './shef/shef.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchRecepieComponent } from './search-recepie/search-recepie.component';
import { ManagerComponent } from './manager/manager.component';
import { NotebookComponent } from './notebook/notebook.component';

export const path:Route[]=[
   {path:'recepie',component:RecepieComponent},
   {path:'shef',component:ShefComponent},
   {path:'home-page',component:HomePageComponent},
   {path:'search-recepie',component:SearchRecepieComponent},
   {path:'manager',component:ManagerComponent},
   {path:'notebook',component:NotebookComponent}
]