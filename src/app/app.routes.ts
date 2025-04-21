import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categoria', component: CategoryComponent },
    { path: '**', component: PageNotFoundComponent }
];
