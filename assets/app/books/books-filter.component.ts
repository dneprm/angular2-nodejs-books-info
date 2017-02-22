import { Component } from "@angular/core";
/*import { NgForm } from "@angular/forms";*/

import { BookService } from "./book.service";
import { Book } from "./book.model";

@Component({
    selector: 'app-books-filter',
    templateUrl: './books-filter.component.html'
})
export class BooksFilterComponent {
    constructor(private bookService: BookService) {}

    onFilterByYear() {
    	console.log('heeeeeey');
    }
}