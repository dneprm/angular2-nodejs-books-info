import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from "./app.component";
import { BookComponent } from "./books/book.component";
import { BooksListComponent } from "./books/books-list.component";
import { BooksComponent } from "./books/books.component";
import { routing } from "./app.routing";
import { SearchPipe } from './books/search.pipe';
import { SortPipe } from './books/sort-by-asc.pipe';
@NgModule({
    declarations: [
        AppComponent,
        BooksListComponent,
        BookComponent,
        BooksComponent, 
        SearchPipe,
        SortPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}