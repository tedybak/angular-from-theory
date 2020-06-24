import { NgModule } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';


const routes:Route[] = [
    { path: 'search', component: SearchComponent }
]

@NgModule({
    
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FeatureRoutingModule{}