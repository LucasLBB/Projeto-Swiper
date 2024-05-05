import { Routes } from '@angular/router';
import { CardsComponent } from './shared/componentes/cards/cards.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'cards', component: CardsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];
