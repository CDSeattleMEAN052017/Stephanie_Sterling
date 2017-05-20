import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'new', component: NewComponent },
    { path: 'show/:id', component: ShowComponent },
    { path: 'edit/:id', component: EditComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
