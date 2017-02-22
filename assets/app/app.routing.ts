import { Routes, RouterModule } from "@angular/router";


import { BooksComponent } from "./books/books.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent }
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);