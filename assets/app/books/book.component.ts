import { Component, Input } from "@angular/core";

import { Book } from "./book.model";
import { BookService } from "./book.service";


@Component({
    selector: 'app-book',
    template: `
          <td>{{book.author}}</td>
          <td>{{book.title}}</td>
          <td>{{book.year}}</td>
    `
})

export class BookComponent {
    @Input() book: Book;
    constructor(private bookService: BookService) { console.log(this.book)}
}
